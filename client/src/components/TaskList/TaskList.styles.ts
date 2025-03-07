import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  width: 65vw 
`;

export const EmptyMessage = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 16px;
  color: #6c757d;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
  flex-wrap: wrap;
  
`;

export const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SortButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${props => props.$isActive ? '#007bff' : '#f8f9fa'};
  color: ${props => props.$isActive ? 'white' : '#212529'};
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$isActive ? '#0069d9' : '#e9ecef'};
  }

  svg {
    margin-left: 5px;
  }
`;