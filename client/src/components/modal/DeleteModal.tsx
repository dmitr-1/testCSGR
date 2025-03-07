import React from 'react';
import { CancelButton, ConfirmButton, ModalContainer,  ModalFooter, ModalHeader, ModalOverlay, ModalTitle } from './Delete.styles';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
  }

const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    confirmText = 'Подтвердить',
    cancelText = 'Отмена'
  }) => {
    if (!isOpen) return null;
  
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <CancelButton onClick={onClose}>
              {cancelText}
            </CancelButton>
            <ConfirmButton onClick={onConfirm}>
              {confirmText}
            </ConfirmButton>
          </ModalFooter>
        </ModalContainer>
      </ModalOverlay>
    );
  };
  
  export default DeleteModal;