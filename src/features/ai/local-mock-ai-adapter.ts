import { AIImageAdapter, CreateEditPlanInput, ProcessImageInput, ProcessImageResult } from './ai.types';
import { EditPlan, StoredImage } from '../projects/project.types';

export class LocalMockAIAdapter implements AIImageAdapter {
  async createEditPlan(input: CreateEditPlanInput): Promise<EditPlan> {
    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      id: crypto.randomUUID(),
      summary: 'Analisei sua imagem e preparei os ajustes necessários para o resultado desejado.',
      destinationId: input.destinationId,
      goalId: input.goalId,
      operations: [
        { type: 'color_correction', parameters: { contrast: 1.1, brightness: 1.05 } },
        { type: 'sharpness', parameters: { amount: 1.2 } },
      ],
      output: {
        width: 1080,
        height: 1080,
        format: 'webp',
        quality: 90,
      },
    };
  }

  async processImage(input: ProcessImageInput): Promise<ProcessImageResult> {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // For the mock, we will just return a modified copy of the original image (or just the original as a placeholder)
    // In a real local version, we'd use Canvas API to apply filters.
    // Here we just duplicate the StoredImage with a new ID to simulate a result.
    
    // We'll create a blob copy to be safe.
    const resultBlob = new Blob([input.originalImage.blob], { type: input.originalImage.mimeType });
    const previewUrl = URL.createObjectURL(resultBlob);

    const resultImage: StoredImage = {
      id: crypto.randomUUID(),
      name: `renderai_${input.originalImage.name}`,
      mimeType: input.originalImage.mimeType,
      width: input.originalImage.width,
      height: input.originalImage.height,
      sizeBytes: resultBlob.size,
      blob: resultBlob,
      previewUrl,
    };

    return { resultImage };
  }
}
