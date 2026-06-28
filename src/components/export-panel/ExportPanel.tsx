import * as React from 'react';
import { Button } from '../ui/button';
import { Download, RefreshCcw } from 'lucide-react';

interface ExportPanelProps {
  onDownload: () => void;
  onNewVersion: () => void;
  onReset: () => void;
  className?: string;
}

export function ExportPanel({ onDownload, onNewVersion, onReset, className }: ExportPanelProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-semibold text-slate-100">Sua imagem está pronta.</h2>
      
      <div className="flex flex-col gap-3">
        <Button size="lg" className="w-full gap-2 text-lg" onClick={onDownload}>
          <Download className="w-5 h-5" />
          Baixar Resultado
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={onNewVersion}>
            Mais natural
          </Button>
          <Button variant="secondary" onClick={onNewVersion}>
            Mais impactante
          </Button>
        </div>

        <Button variant="ghost" onClick={onReset} className="mt-4">
          <RefreshCcw className="w-4 h-4 mr-2" />
          Tentar outra imagem
        </Button>
      </div>
    </div>
  );
}
