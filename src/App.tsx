/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EditorFlow } from './features/editor/EditorFlow';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 font-sans selection:bg-[#2F8CFF]/30 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#6A4CFF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#2F8CFF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-[#38D9FF]/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 bg-[#070B12]/40 backdrop-blur-xl border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 bg-gradient-to-br from-[#2F8CFF] to-[#6A4CFF] rounded-[10px] flex items-center justify-center shadow-[0_0_20px_rgba(106,76,255,0.3)] group-hover:shadow-[0_0_25px_rgba(106,76,255,0.5)] transition-all duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Render<span className="text-[#2F8CFF]">AI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Novo Projeto</a>
          <a href="#" className="hover:text-white transition-colors">Projetos</a>
          <a href="#" className="hover:text-white transition-colors">Histórico</a>
          <a href="#" className="hover:text-white transition-colors">Ajuda</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex text-slate-400 hover:text-white transition-colors" aria-label="Configurações">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
          <button className="hidden md:flex text-slate-400 hover:text-white transition-colors" aria-label="Mudar Tema">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden ml-2 cursor-pointer hover:border-slate-500 transition-colors">
             <img src="https://api.dicebear.com/7.x/notionists/svg?seed=RenderAI&backgroundColor=transparent" alt="Usuário" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>
      
      <main className="relative z-10 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
        <EditorFlow />
      </main>
    </div>
  );
}
