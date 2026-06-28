import * as React from 'react';
import { GOAL_PRESETS } from '@/src/features/editor/editor.constants';
import { SelectableCard } from '../ui/card';
import { motion } from 'motion/react';

interface GoalPickerProps {
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function GoalPicker({ selectedId, onSelect }: GoalPickerProps) {
  return (
    <div className="space-y-4 mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-100">O que você quer melhorar?</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
        {GOAL_PRESETS.map((preset, i) => (
          <motion.div 
            key={preset.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
          >
            <SelectableCard
              selected={selectedId === preset.id}
              onClick={() => onSelect(preset.id)}
              className="p-3 flex items-center justify-center text-center h-16"
            >
              <span className="text-sm font-medium">{preset.label}</span>
            </SelectableCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
