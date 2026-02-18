import React from 'react';

interface ConverterAreaProps {
  text: string;
  setText: (text: string) => void;
  onCaseChange: (type: string) => void;
  onCopy: () => void;
  onDownload: () => void;
  copied: boolean;
}

const ConverterArea: React.FC<ConverterAreaProps> = ({ 
  text, 
  setText, 
  onCaseChange, 
  onCopy, 
  onDownload, 
  copied 
}) => {
  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const lineCount = text.trim() === '' ? 0 : text.split('\n').length;

  const btnClass = "px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all active:scale-95";
  const primaryBtnClass = "px-4 py-2.5 bg-blue-600 border border-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 hover:shadow-md transition-all active:scale-95 flex items-center justify-center space-x-2 w-full sm:w-auto";

  return (
    <div className="flex flex-col h-full transition-colors">
      {/* Text Area Toolbar */}
      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
            Editor
          </span>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={onCopy}
            title="Copy to clipboard"
            aria-label="Copy current text"
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {copied ? <i className="fas fa-check text-green-500" aria-hidden="true"></i> : <i className="fas fa-copy" aria-hidden="true"></i>}
          </button>
          <button 
            onClick={onDownload}
            title="Download as .txt"
            aria-label="Download text as file"
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fas fa-download" aria-hidden="true"></i>
          </button>
          <button 
            onClick={() => onCaseChange('clear')}
            title="Clear text"
            aria-label="Clear all text"
            className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
          >
            <i className="fas fa-trash-alt" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Main Input */}
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your content here..."
          aria-label="Text to convert"
          className="w-full h-96 p-6 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none resize-none text-lg leading-relaxed transition-colors border-0"
        />
        {copied && (
          <div className="absolute top-4 right-4 animate-in fade-in slide-in-from-top-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
            Copied!
          </div>
        )}
      </div>

      {/* Conversion Grid */}
      <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 mb-6">
          <button onClick={() => onCaseChange('sentence')} className={btnClass} aria-label="Convert to sentence case">Sentence case</button>
          <button onClick={() => onCaseChange('lower')} className={btnClass} aria-label="Convert to lower case">lower case</button>
          <button onClick={() => onCaseChange('upper')} className={btnClass} aria-label="Convert to upper case">UPPER CASE</button>
          <button onClick={() => onCaseChange('capitalized')} className={btnClass} aria-label="Convert to capitalized case">Capitalized Case</button>
          <button onClick={() => onCaseChange('alternating')} className={btnClass} aria-label="Convert to alternating case">aLtErNaTiNg cAsE</button>
          <button onClick={() => onCaseChange('title')} className={btnClass} aria-label="Convert to title case">Title Case</button>
          <button onClick={() => onCaseChange('inverse')} className={btnClass} aria-label="Convert to inverse case">iNVERSE cASE</button>
          <button onClick={() => onCaseChange('slug')} className={btnClass} aria-label="Convert to slug case">slug-case</button>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 gap-4">
          <div className="flex space-x-6 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest" aria-live="polite">
            <div className="flex flex-col">
              <span className="text-slate-400 dark:text-slate-500 mb-1">Characters</span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">{charCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 dark:text-slate-500 mb-1">Words</span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">{wordCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 dark:text-slate-500 mb-1">Lines</span>
              <span className="text-slate-900 dark:text-slate-100 text-sm font-bold">{lineCount}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <button 
              onClick={onCopy}
              className={primaryBtnClass}
              aria-label="Copy to clipboard"
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-clipboard'}`} aria-hidden="true"></i>
              <span>{copied ? 'Copied' : 'Copy to Clipboard'}</span>
            </button>
            <button 
              onClick={onDownload}
              className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
              aria-label="Download text file"
            >
              <i className="fas fa-file-alt text-slate-400 dark:text-slate-500" aria-hidden="true"></i>
              <span>Download .txt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterArea;