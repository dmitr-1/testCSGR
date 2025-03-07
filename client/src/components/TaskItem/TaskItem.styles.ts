import styled from 'styled-components';
import { Priority } from '../../types/Task';

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'high':
      return '#dc3545';
    case 'medium':
      return '#ffc107';
    case 'low':
      return '#28a745';
    default:
      return '#6c757d';
  }
};

export const TaskItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const TaskTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #212529;
`;

export const TaskDescription = styled.p`
  margin: 10px 0;
  color: #495057;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const TaskMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: #6c757d;
  font-size: 14px;
`;

export const PriorityBadge = styled.span<{ priority: Priority }>`
  background-color: ${({ priority }) => getPriorityColor(priority)};
  color: white;
  padding: 3px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  width: 10%;
  display: flex;
  justify-content: center
`;

export const DateInfo = styled.span`
  color: #6c757d;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6c757d;
  padding: 5px;
  border-radius: 4px;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #495057;
    background-color: #f8f9fa;
  }
`;

export const EditFormContainer = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
`;