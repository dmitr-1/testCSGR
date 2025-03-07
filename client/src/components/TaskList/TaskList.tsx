import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setFilter, toggleSortOrder } from '../../store/slices/taskSlice';
import { Priority } from '../../types/Task';
import TaskItem from '../TaskItem/TaskItem';
import {
  ListContainer,
  EmptyMessage,
  ControlsContainer,
  FilterGroup,
  SortButton,
  Select
} from './TaskList.styles';

const TaskList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, filter, sortAscending } = useAppSelector(state => state.tasks);
  
  const filteredAndSortedTasks = React.useMemo(() => {
    let result = [...tasks];
    
    if (filter !== 'all') {
      result = result.filter(task => task.priority === filter);
    }
    
    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortAscending ? dateA - dateB : dateB - dateA;
    });
    
    return result;
  }, [tasks, filter, sortAscending]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value as Priority | 'all'));
  };

  const handleToggleSort = () => {
    dispatch(toggleSortOrder());
  };

  return (
    <div>
      <ControlsContainer>
        <FilterGroup>
          <label htmlFor="priorityFilter">Фильтр по приоритету:</label>
          <Select 
            id="priorityFilter" 
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">Все</option>
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
          </Select>
        </FilterGroup>
        
        <SortButton 
          $isActive={true} 
          onClick={handleToggleSort}
        >
          По дате {sortAscending ? '↑' : '↓'}
        </SortButton>
      </ControlsContainer>

      <ListContainer>
        {filteredAndSortedTasks.length > 0 ? (
          filteredAndSortedTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <EmptyMessage>
            {filter === 'all' 
              ? 'Нет доступных задач. Создайте новую задачу!'
              : `Нет задач с приоритетом "${filter}".`
            }
          </EmptyMessage>
        )}
      </ListContainer>
    </div>
  );
};

export default TaskList;