import React, { createContext, useContext, useState } from 'react';
import Modal from '../Modal';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import SecurityPolicy from './SecurityPolicy';

const PolicyModalContext = createContext();

export const PolicyModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '', content: '' });

  const getPolicyContent = (type) => {
    switch (type) {
      case 'privacy':
        return PrivacyPolicy();
      case 'terms':
        return TermsOfService();
      case 'security':
        return SecurityPolicy();
      default:
        return '';
    }
  };

  const openModal = ({ title, type }) => {
    const content = getPolicyContent(type);
    setModalConfig({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, title: '', content: '' });
  };

  return (
    <PolicyModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        title={modalConfig.title}
      >
        <div dangerouslySetInnerHTML={{ __html: modalConfig.content }} />
      </Modal>
    </PolicyModalContext.Provider>
  );
};

export const usePolicyModal = () => {
  const context = useContext(PolicyModalContext);
  if (!context) {
    throw new Error('usePolicyModal must be used within a PolicyModalProvider');
  }
  return context;
};

export default PolicyModalContext; 