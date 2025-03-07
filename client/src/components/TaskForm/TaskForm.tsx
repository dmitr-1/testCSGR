import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskFormData } from '../../types/Task';
import { useAppDispatch } from '../../store/hooks';
import { addTask, updateTask } from '../../store/slices/taskSlice';
import { FormContainer, Form, FormGroup, Label, Input, TextArea, Select, SubmitButton, ErrorMessage } from './TaskForm.styles';

interface TaskFormProps {
  taskId?: string;
  initialData?: TaskFormData;
  onComplete?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskId, initialData = { title: '', description: '', priority: 'medium' }, onComplete }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TaskFormData>({
    defaultValues: initialData,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    if (taskId) {
      dispatch(updateTask({ id: taskId, data }));
    } else {
      dispatch(addTask(data));
      reset({ title: '', description: '', priority: 'medium' });
    }

    if (onComplete) {
      onComplete();
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Название задачи</Label>
          <Input
            id='title'
            type='text'
            {...register('title', {
              required: 'Название задачи обязательно',
              minLength: { value: 3, message: 'Минимум 3 символа' },
            })}
          />
          {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Описание</Label>
          <TextArea
            id='description'
            {...register('description', {
              required: 'Описание обязательно',
            })}
          />
          {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Приоритет</Label>
          <Select id='priority'  {...register('priority', { required: true })}>
            <option value='low'>Низкий</option>
            <option value='medium'>Средний</option>
            <option value='high'>Высокий</option>
          </Select>
        </FormGroup>

        <SubmitButton type='submit' disabled={!isValid}>
          {taskId ? 'Обновить задачу' : 'Добавить задачу'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
