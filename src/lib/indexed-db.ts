import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { RenderAIProject, StoredImage } from '../features/projects/project.types';

interface RenderAIDB extends DBSchema {
  projects: {
    key: string;
    value: RenderAIProject;
    indexes: { 'updatedAt': string };
  };
  images: {
    key: string;
    value: StoredImage;
  };
}

let dbPromise: Promise<IDBPDatabase<RenderAIDB>> | null = null;

export async function initDB() {
  if (!dbPromise) {
    dbPromise = openDB<RenderAIDB>('renderai-db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('projects')) {
          const projectStore = db.createObjectStore('projects', { keyPath: 'id' });
          projectStore.createIndex('updatedAt', 'updatedAt');
        }
        if (!db.objectStoreNames.contains('images')) {
          db.createObjectStore('images', { keyPath: 'id' });
        }
      },
    });
  }
  return dbPromise;
}

export async function saveProject(project: RenderAIProject) {
  const db = await initDB();
  
  // Save images first
  if (project.originalImage) {
    await db.put('images', project.originalImage);
  }
  for (const img of project.resultImages) {
    await db.put('images', img);
  }

  // Save project
  await db.put('projects', project);
}

export async function getProject(id: string): Promise<RenderAIProject | undefined> {
  const db = await initDB();
  const project = await db.get('projects', id);
  if (!project) return undefined;

  // Retrieve images (if needed we can load them lazily, but for now we'll reconstruct them)
  const orig = await db.get('images', project.originalImage.id);
  if (orig) {
    project.originalImage = orig;
    if (!project.originalImage.previewUrl) {
      project.originalImage.previewUrl = URL.createObjectURL(orig.blob);
    }
  }

  const results: StoredImage[] = [];
  for (const result of project.resultImages) {
    const res = await db.get('images', result.id);
    if (res) {
      if (!res.previewUrl) {
        res.previewUrl = URL.createObjectURL(res.blob);
      }
      results.push(res);
    }
  }
  project.resultImages = results;

  return project;
}

export async function getAllProjects(): Promise<RenderAIProject[]> {
  const db = await initDB();
  const projects = await db.getAllFromIndex('projects', 'updatedAt');
  return projects.reverse(); // Newest first
}

export async function deleteProject(id: string) {
  const db = await initDB();
  const project = await db.get('projects', id);
  if (project) {
    await db.delete('images', project.originalImage.id);
    for (const res of project.resultImages) {
      await db.delete('images', res.id);
    }
    await db.delete('projects', id);
  }
}
