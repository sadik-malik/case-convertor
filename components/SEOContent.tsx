import React from 'react';

const SEOContent: React.FC = () => {
  return (
    <section className="mt-20 max-w-4xl mx-auto space-y-16 pb-20">
      {/* Informational Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">The Ultimate Online Case Converter Utility</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          Welcome to the most efficient <strong>online case converter</strong>. Whether you've accidentally left Caps Lock on, or you need to format text for a professional document, our tool provides a suite of features to transform your text instantly. Our <strong>convert case</strong> utility is designed for writers, developers, and office professionals who value speed and privacy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">What is Sentence Case?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Sentence case capitalizes the first letter of the first word in a sentence and all proper nouns. It is the standard format for most written communication, making your text look natural and professional.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">When to use Title Case?</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Title Case is typically used for book titles, headlines, and subheadings. It capitalizes the first letter of every word except for minor words like "the", "a", "an", and "but".
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Lower Case & Upper Case</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Instantly convert a whole block of text to <strong>lowercase</strong> or <strong>UPPERCASE</strong> with a single click. This is perfect for cleaning up data or shouting your message from the rooftops.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Slug Case & Kebab Case</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Our <strong>slug case</strong> converter transforms your text into a URL-friendly format. It replaces spaces with hyphens and removes special characters, making it ideal for SEO-friendly URLs and file naming conventions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Is this Case Converter free to use?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Yes, CaseConvertor is 100% free. You can convert as much text as you need without any limitations or sign-ups.
            </p>
          </div>
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Will my text be stored on your servers?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              No. All text processing happens locally in your web browser. Your private data never leaves your computer, making it one of the most secure ways to <strong>change text case</strong> online.
            </p>
          </div>
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Does this tool support bulk text conversion?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Absolutely. You can paste entire documents into the editor, and our conversion engine will handle it instantly with no lag.
            </p>
          </div>
        </div>
      </div>

      {/* CTA / Summary */}
      <div className="text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>Optimized for productivity. Built for privacy. The best <strong>text case changer</strong> on the web.</p>
      </div>
    </section>
  );
};

export default SEOContent;