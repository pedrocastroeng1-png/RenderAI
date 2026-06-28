import * as React from 'react';
import { UploadDropzone } from '@/src/components/upload/UploadDropzone';
import { ImagePreview } from '@/src/components/image-preview/ImagePreview';
import { DestinationPicker } from '@/src/components/destination-picker/DestinationPicker';
import { GoalPicker } from '@/src/components/goal-picker/GoalPicker';
import { PromptBox } from '@/src/components/prompt-box/PromptBox';
import { RendiAssistant } from '@/src/components/mascot/RendiAssistant';
import { BeforeAfterViewer } from '@/src/components/before-after/BeforeAfterViewer';
import { ExportPanel } from '@/src/components/export-panel/ExportPanel';
import { Button } from '@/src/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useEditorFlow } from '@/src/hooks/use-editor-flow';
import { Sparkles } from 'lucide-react';

const QUICK_DESTINATIONS = [
  { id: 'instagram-story', label: 'Instagram' },
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'whatsapp-status', label: 'WhatsApp' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'pinterest', label: 'Pinterest' }
];

const INTENT_PLACEHOLDERS = [
  "Quero postar no Instagram...",
  "Quero anunciar meu imóvel...",
  "Quero melhorar essa selfie...",
  "Quero vender esse produto...",
  "Quero uma foto estilo Apple..."
];

export function EditorFlow() {
  const {
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
  } = useEditorFlow();

  const [placeholderIndex, setPlaceholderIndex] = React.useState(0);

  React.useEffect(() => {
    if (state === 'upload') {
      const interval = setInterval(() => {
        setPlaceholderIndex((prev) => (prev + 1) % INTENT_PLACEHOLDERS.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [state]);

  const handleStartClick = () => {
    // If they filled the prompt but didn't upload, we trigger upload dropzone visually or programmatically
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) fileInput.click();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 h-full flex flex-col">
      <AnimatePresence mode="wait">
        
        {state === 'upload' && (
          <motion.div 
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center py-6 min-h-full"
          >
            {/* Rendi Hero Representation (Abstract AI Lens for MVP) */}
            <motion.div
              className="relative w-24 h-24 mb-12 flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2F8CFF]/30 to-[#6A4CFF]/30 blur-2xl animate-pulse" />
              
              {/* The Core */}
              <div className="relative w-full h-full rounded-full border border-white/20 bg-[#070B12] shadow-[inset_0_0_20px_rgba(106,76,255,0.5)] overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-[#2F8CFF]/20 to-transparent" />
                {/* Inner rotating rings */}
                <motion.div 
                  className="absolute w-[150%] h-[150%] rounded-full border border-[#2F8CFF]/30"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  style={{ borderStyle: 'dashed' }}
                />
                <motion.div 
                  className="absolute w-[80%] h-[80%] rounded-full border border-[#6A4CFF]/40"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                />
                {/* Center Eye / Lens */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F8CFF] to-[#6A4CFF] shadow-[0_0_15px_rgba(106,76,255,0.8)]" />
              </div>

              {/* Floating tech elements */}
              <motion.div
                className="absolute -right-4 top-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg"
                animate={{ y: [0, -4, 0], x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              >
                <Sparkles className="w-4 h-4 text-[#38D9FF]" />
              </motion.div>
              <motion.div
                className="absolute -left-3 bottom-2 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg"
                animate={{ y: [0, 5, 0], x: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#6A4CFF] shadow-[0_0_8px_#6A4CFF]" />
              </motion.div>
            </motion.div>

            {/* Title & Subtitle */}
            <div className="text-center max-w-3xl mb-14">
              <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-6 text-white leading-[1.05]">
                Sua imagem.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                  Perfeita em segundos.
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 font-normal max-w-2xl mx-auto tracking-tight">
                Descreva o resultado que deseja. A RenderAI cuida de toda a parte técnica.
              </p>
            </div>

            {/* Unified Intent & Upload Area */}
            <div className="w-full max-w-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/[0.08] rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col gap-8">
              
              <div className="relative group">
                <AnimatePresence mode="wait">
                  {!userPrompt && (
                    <motion.div
                      key={placeholderIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute top-0 left-0 text-2xl md:text-3xl text-slate-500/80 pointer-events-none font-medium tracking-tight"
                    >
                      {INTENT_PLACEHOLDERS[placeholderIndex]}
                    </motion.div>
                  )}
                </AnimatePresence>
                <textarea
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  className="w-full h-24 bg-transparent text-2xl md:text-3xl text-white focus:outline-none resize-none p-0 font-medium relative z-10 leading-relaxed placeholder:text-transparent tracking-tight custom-scrollbar"
                />
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-focus-within:via-[#2F8CFF]/50 transition-all duration-700" />
              </div>

              <UploadDropzone onFileSelect={handleFileSelect} />
              
              <div className="pt-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Destinos Rápidos</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {QUICK_DESTINATIONS.map(dest => (
                     <button 
                       key={dest.id}
                       onClick={() => setSelectedDestination(dest.id)}
                       className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 border backdrop-blur-md ${
                         selectedDestination === dest.id 
                           ? 'bg-white/10 border-white/20 text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]' 
                           : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10 hover:bg-white/[0.02]'
                       }`}
                     >
                       {dest.label}
                     </button>
                  ))}
                </div>
              </div>
              
              <Button 
                size="lg" 
                onClick={handleStartClick}
                className="w-full mt-4 h-16 text-lg font-semibold bg-white text-black hover:bg-white/90 border-0 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 rounded-[16px]"
              >
                <Sparkles className="w-5 h-5 mr-2 text-black" />
                Começar
              </Button>
            </div>
          </motion.div>
        )}

        {state === 'configure' && originalImage && (
          <motion.div 
            key="configure"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="flex flex-col">
              <ImagePreview url={originalImage.previewUrl!} onReset={handleReset} />
            </div>
            
            <div className="flex flex-col h-full overflow-hidden">
              <DestinationPicker selectedId={selectedDestination} onSelect={setSelectedDestination} />
              <GoalPicker selectedId={selectedGoal} onSelect={setSelectedGoal} />
              
              <div className="mt-8 flex-1">
                <PromptBox value={userPrompt} onChange={setUserPrompt} />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <Button size="lg" onClick={handleProcess} className="w-full sm:w-auto">
                  Renderizar Imagem ✨
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {state === 'processing' && (
          <motion.div 
            key="processing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center h-full"
          >
            <RendiAssistant state="processing" message={rendiMessage} />
          </motion.div>
        )}

        {state === 'result' && originalImage && resultImage && (
          <motion.div 
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2">
              <BeforeAfterViewer 
                beforeUrl={originalImage.previewUrl!} 
                afterUrl={resultImage.previewUrl!} 
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <ExportPanel 
                onDownload={handleDownload}
                onNewVersion={handleNewVersion}
                onReset={handleReset}
              />
              
              <div className="mt-12 hidden lg:block">
                <RendiAssistant state="success" message={rendiMessage} className="scale-75 origin-left" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
