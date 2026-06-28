export type StoredImage = {
  id: string;
  name: string;
  mimeType: string;
  width: number;
  height: number;
  sizeBytes: number;
  blob: Blob;
  previewUrl?: string;
};

export type DestinationCategory = 'social' | 'ecommerce' | 'professional' | 'print' | 'personal';

export type DestinationPreset = {
  id: string;
  label: string;
  category: DestinationCategory;
  aspectRatio: string;
  recommendedWidth: number;
  recommendedHeight: number;
  exportFormat: 'png' | 'jpeg' | 'webp';
  quality: number;
};

export type EditGoal = {
  id: string;
  label: string;
};

export type EditOperation = {
  type: string;
  parameters: Record<string, any>;
};

export type EditPlan = {
  id: string;
  summary: string;
  destinationId?: string;
  goalId?: string;
  operations: EditOperation[];
  output: {
    width: number;
    height: number;
    format: 'png' | 'jpeg' | 'webp';
    quality: number;
  };
};

export type RenderAIProject = {
  id: string;
  createdAt: string;
  updatedAt: string;
  originalImage: StoredImage;
  resultImages: StoredImage[];
  selectedDestination?: DestinationPreset;
  selectedGoal?: EditGoal;
  userPrompt?: string;
  editPlan?: EditPlan;
  status: 'draft' | 'processing' | 'completed' | 'failed';
};
