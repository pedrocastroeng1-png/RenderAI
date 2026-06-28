import * as React from 'react';
import { DESTINATION_PRESETS } from '@/src/features/editor/editor.constants';
import { SelectableCard } from '../ui/card';
import { motion } from 'motion/react';

interface DestinationPickerProps {
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function DestinationPicker({ selectedId, onSelect }: DestinationPickerProps) {
  // We can group by category in a real app. For MVP, we list them in a responsive grid.
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-100">Onde você vai usar essa imagem?</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {DESTINATION_PRESETS.map((preset, i) => (
          <motion.div 
            key={preset.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <SelectableCard
              selected={selectedId === preset.id}
              onClick={() => onSelect(preset.id)}
              className="p-4 flex flex-col items-center justify-center text-center h-24"
            >
              <span className="text-sm font-medium">{preset.label}</span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">{preset.category}</span>
            </SelectableCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
