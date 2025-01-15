export interface Task{
  id: number;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  state: 'To Do' | 'In Progress' | 'Done';
}