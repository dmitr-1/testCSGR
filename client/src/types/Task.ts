export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  createdAt: Date;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
}