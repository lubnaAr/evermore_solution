import React from 'react';
import { Task } from '../../types';
import { Box, Button } from '@mui/material';

interface TaskActionsProps {
  task: Task;
  onStateChange: (task: Task) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number, taskName: string) => void;
  getNextState: (currentState: Task['state']) => Task['state'];
}

const TaskActions: React.FC<TaskActionsProps> = ({
  task,
  onStateChange,
  onEdit,
  onDelete,
  getNextState,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Button
        variant="contained"
        color="info"
        onClick={() => onStateChange(task)}
      >
        Move to {getNextState(task.state)}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onEdit(task)}
      >
        Edit
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => onDelete(task.id, task.name)}
      >
        Delete
      </Button>
    </Box>
  );
};

export default TaskActions;