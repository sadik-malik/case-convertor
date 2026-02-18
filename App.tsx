import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConverterArea from './components/ConverterArea';
import SEOContent from './components/SEOContent';
import { 
  toSentenceCase, 
  toLowerCase, 
  toUpperCase, 
  toCapitalizedCase, 
  toAlternatingCase, 
  toTitleCase, 
  toInverseCase,
  toSlugCase
} from './utils/caseConversionEngine';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleCaseChange = (type: string) => {
    if (!text && type !== 'clear') return;
    
    switch (type) {
      case 'sentence': setText(toSentenceCase(text)); break;
      case 'lower': setText(toLowerCase(text)); break;
      case 'upper': setText(toUpperCase(text)); break;
      case 'capitalized': setText(toCapitalizedCase(text)); break;
      case 'alternating': setText(toAlternatingCase(text)); break;
      case 'title': setText(toTitleCase(text)); break;
      case 'inverse': setText(toInverseCase(text)); break;
      case 'slug': setText(toSlugCase(text)); break;
      case 'clear': setText(''); break;
      default: break;
    }
  };

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = () => {
    if (!text) return;
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "caseconvertor-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 dark:selection:bg-blue-900/40">
      <Header />
      
      <main className="flex-grow w-full px-4 sm:px-8 py-8 mx-auto max-w-[1440px]">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
          <ConverterArea 
            text={text} 
            setText={setText} 
            onCaseChange={handleCaseChange}
            onCopy={handleCopy}
            onDownload={handleDownload}
            copied={copied}
          />
        </div>
        
        {/* Features Info Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <i className="fas fa-bolt text-xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Instant Conversion</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Transform your text instantly with our robust case conversion engine. No page reloads required.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <i className="fas fa-chart-bar text-xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Detailed Stats</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Track word count, character count, and lines in real-time as you type or convert.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
              <i className="fas fa-shield-alt text-xl"></i>
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Privacy First</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              All conversions happen locally in your browser. Your data never leaves your computer.
            </p>
          </div>
        </section>

        {/* SEO Content Section */}
        <SEOContent />
      </main>

      <Footer />
    </div>
  );
};

export default App;