import React, { useState, useContext, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import TaskContext from './TaskContext';

interface EditTaskProps {
  taskId: number;
  taskName: string;
  taskPriority: 'High' | 'Medium' | 'Low';
  open: boolean;
  onClose: () => void;
}

const EditTask: React.FC<EditTaskProps> = ({
  taskId,
  taskName,
  taskPriority,
  open,
  onClose,
}) => {
  const { updateTask } = useContext(TaskContext);
  const [name, setName] = useState(taskName);
  const [priority, setPriority] = useState(taskPriority);

  useEffect(() => {
    setName(taskName);
    setPriority(taskPriority);
  }, [taskName, taskPriority]);

  const handleSave = () => {
    updateTask({
      id: taskId,
      name,
      priority,
      state: 'To Do',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          label="Task Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Priority"
          select
          fullWidth
          margin="normal"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')}
          SelectProps={{
            native: true,
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="secondary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTask;