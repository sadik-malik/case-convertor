import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold text-slate-900 dark:text-white">CaseConvertor</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            The ultimate text conversion utility designed for speed, privacy, and productivity. 
            All processing happens locally in your browser to ensure your data stays secure.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-xs font-medium text-blue-600 dark:text-blue-400">
            <i className="fas fa-magic mr-2"></i>
            Vibe coded with Google AI Studio
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center items-center text-slate-400 dark:text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} CaseConvertor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;