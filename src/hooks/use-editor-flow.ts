import * as React from 'react';
import { StoredImage, RenderAIProject } from '../features/projects/project.types';
import { saveProject } from '../lib/indexed-db';
import { LocalMockAIAdapter } from '../features/ai/local-mock-ai-adapter';
import { DESTINATION_PRESETS, GOAL_PRESETS } from '../features/editor/editor.constants';

type FlowState = 'upload' | 'configure' | 'processing' | 'result';

export function useEditorFlow() {
  const [state, setState] = React.useState<FlowState>('upload');
  const [originalImage, setOriginalImage] = React.useState<StoredImage | null>(null);
  const [resultImage, setResultImage] = React.useState<StoredImage | null>(null);
  
  const [selectedDestination, setSelectedDestination] = React.useState<string>();
  const [selectedGoal, setSelectedGoal] = React.useState<string>();
  const [userPrompt, setUserPrompt] = React.useState('');

  const [rendiMessage, setRendiMessage] = React.useState('Oxente... essa foto tem potencial, viu?');

  const handleFileSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    const stored: StoredImage = {
      id: crypto.randomUUID(),
      name: file.name,
      mimeType: file.type,
      sizeBytes: file.size,
      width: 0, 
      height: 0,
      blob: file,
      previewUrl: url,
    };
    setOriginalImage(stored);
    setState('configure');
  };

  const handleReset = () => {
    if (originalImage?.previewUrl && originalImage.previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(originalImage.previewUrl);
    }
    if (resultImage?.previewUrl && resultImage.previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(resultImage.previewUrl);
    }
    setOriginalImage(null);
    setResultImage(null);
    setSelectedDestination(undefined);
    setSelectedGoal(undefined);
    setUserPrompt('');
    setState('upload');
  };

  const handleNewVersion = () => {
    setResultImage(null);
    setState('configure');
  };

  const handleProcess = async () => {
    if (!originalImage) return;
    setState('processing');
    setRendiMessage('Deixa comigo, estou analisando os detalhes...');

    const adapter = new LocalMockAIAdapter();
    
    try {
      const plan = await adapter.createEditPlan({
        originalImage,
        destinationId: selectedDestination,
        goalId: selectedGoal,
        userPrompt
      });

      setRendiMessage('Aplicando melhorias sem exagero...');
      const { resultImage: resImg } = await adapter.processImage({
        originalImage,
        editPlan: plan
      });

      setResultImage(resImg);
      setRendiMessage('Prontinho! Agora sim ficou bonita.');

      const project: RenderAIProject = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        originalImage,
        resultImages: [resImg],
        selectedDestination: DESTINATION_PRESETS.find(p => p.id === selectedDestination),
        selectedGoal: GOAL_PRESETS.find(p => p.id === selectedGoal),
        userPrompt,
        editPlan: plan,
        status: 'completed'
      };
      
      await saveProject(project);
      
      setTimeout(() => setState('result'), 1000);
    } catch (e) {
      console.error(e);
      setRendiMessage('Ops... não consegui processar. Tente novamente.');
      setTimeout(() => setState('configure'), 3000);
    }
  };

  const handleDownload = () => {
    if (!resultImage?.previewUrl) return;
    const a = document.createElement('a');
    a.href = resultImage.previewUrl;
    a.download = `renderai_${originalImage?.name || 'imagem.webp'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return {
    state,
    originalImage,
    resultImage,
    selectedDestination,
    setSelectedDestination,
    selectedGoal,
    setSelectedGoal,
    userPrompt,
    setUserPrompt,
    rendiMessage,
    handleFileSelect,
    handleReset,
    handleProcess,
    handleDownload,
    handleNewVersion
  };
}
