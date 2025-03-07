import React, { useState } from 'react';
import { Task } from '../../types/Task';
import { useAppDispatch } from '../../store/hooks';
import { deleteTask } from '../../store/slices/taskSlice';
import TaskForm from '../TaskForm/TaskForm';
import DeleteModal from '../modal/DeleteModal';
import {
  TaskItemContainer,
  TaskHeader,
  TaskTitle,
  TaskDescription,
  TaskMeta,
  PriorityBadge,
  DateInfo,
  ButtonsContainer,
  ActionButton,
  EditFormContainer
} from './TaskItem.styles';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTask(task.id));
    setIsDeleteModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <TaskItemContainer>
      {!isEditing ? (
        <>
          <TaskHeader>
            <TaskTitle>{task.title}</TaskTitle>
            <PriorityBadge priority={task.priority}>
              {task.priority}
            </PriorityBadge>
          </TaskHeader>
          
          <TaskDescription>{task.description}</TaskDescription>
          
          <TaskMeta>
            <DateInfo>{formatDate(task.createdAt)}</DateInfo>
            
            <ButtonsContainer>
              <ActionButton onClick={handleEdit}>
                Редактировать
              </ActionButton>
              <ActionButton onClick={handleDelete}>
                Удалить
              </ActionButton>
            </ButtonsContainer>
          </TaskMeta>
        </>
      ) : (
        <EditFormContainer>
          <TaskForm
            taskId={task.id}
            initialData={{
              title: task.title,
              description: task.description,
              priority: task.priority
            }}
            onComplete={handleEditComplete}
          />
          <ActionButton onClick={() => setIsEditing(false)}>
            Отменить
          </ActionButton>
        </EditFormContainer>
      )}

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Подтверждение удаления"
        message="Вы уверены, что хотите удалить эту задачу?"
        confirmText="Удалить"
        cancelText="Отмена"
      />
    </TaskItemContainer>
  );
};

export default TaskItem;