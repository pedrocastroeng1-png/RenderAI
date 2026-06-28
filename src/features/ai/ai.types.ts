import type { EditPlan, StoredImage } from '../projects/project.types';

export interface CreateEditPlanInput {
  originalImage: StoredImage;
  destinationId?: string;
  goalId?: string;
  userPrompt?: string;
}

export interface ProcessImageInput {
  originalImage: StoredImage;
  editPlan: EditPlan;
}

export interface ProcessImageResult {
  resultImage: StoredImage;
}

export interface AIImageAdapter {
  createEditPlan(input: CreateEditPlanInput): Promise<EditPlan>;
  processImage(input: ProcessImageInput): Promise<ProcessImageResult>;
}
