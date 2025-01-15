import React, { useContext } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import TaskContext from './TaskContext';

interface DeleteTaskProps {
  taskId: number;
  taskName: string;
  open: boolean;
  onClose: () => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, taskName, open, onClose }) => {
  const { removeTask } = useContext(TaskContext);

  const handleConfirm = () => {
    removeTask(taskId);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the task <strong>{taskName}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteTask;