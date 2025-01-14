import React, { createContext, useContext, useState } from 'react';

// Create context
export const PolicyModalContext = createContext();

// Create provider
export const PolicyModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (content) => {
    console.log('Opening modal with content:', content);
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent({ title: '', content: '' });
  };

  return (
    <PolicyModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75" 
          aria-labelledby="modal-title" 
          role="dialog" 
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="flex min-h-screen items-center justify-center p-4">
            <div 
              className="relative transform overflow-hidden rounded-xl bg-gradient-to-b from-purple-900 to-black text-white shadow-xl transition-all max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-purple-700/30 flex justify-between items-center">
                <h3 className="text-2xl font-semibold" id="modal-title">
                  {modalContent.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-purple-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                <div
                  className="text-purple-50 space-y-4"
                  dangerouslySetInnerHTML={{ __html: modalContent.content }}
                />
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-purple-700/30 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PolicyModalContext.Provider>
  );
};

// Custom hook to use the modal
export const usePolicyModal = () => {
  const context = useContext(PolicyModalContext);
  if (!context) {
    throw new Error('usePolicyModal must be used within a PolicyModalProvider');
  }
  return context;
};

// Modal component
const PolicyModal = () => null; // This is just a placeholder since the actual modal is rendered by the provider

export default PolicyModal; 