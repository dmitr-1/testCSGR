import styled from 'styled-components';

export const ModalOverlay = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  margin-bottom: 15px;
`;

export const ModalTitle = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
`;

export const CancelButton = styled(Button)`
  background-color: #f1f1f1;
  color: #333;

  &:hover {
    background-color: #e1e1e1;
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: #e53935;
  color: white;

  &:hover {
    background-color: #c62828;
  }
`;
