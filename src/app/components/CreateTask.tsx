import React, { useState, useContext } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
import { Task } from '../types';
import TaskContext from './TaskContext';



const CreateTask = () => {

  const { addTask, tasks } = useContext(TaskContext);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newTaskPrioirty, setNewTaskPriority] = useState<'High'|'Medium'|'Low'>('Low');
  const [error, setError ] = useState(false);

  const handleToggleModal = () => {
    if(open){
      setNewTask('');
      setNewTaskPriority('Low');
      setError(false);
    }
    setOpen(!open);
  }
  const handleSave = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        name: newTask,
        priority: newTaskPrioirty,
        state: 'To Do',
      };
      console.log("Adding task to context:", task);
      addTask(task);
      console.log("Current tasks in context after addition:", tasks);
      setNewTask('');
      setNewTaskPriority('Low');
      setOpen(false);
    } else {
      setError(true);
    }
  };

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    if(error) setError(false);
    setNewTask(e.target.value);
  }

  return(
    <Box>
      <Button variant="outlined" onClick={handleToggleModal}>Create New Task </Button>
      <Dialog open={open} onClose={handleToggleModal}>
          <DialogTitle> Add a new task</DialogTitle>
          <DialogContent>
            <TextField 
              label="Task Name"
              autoFocus
              type="text"
              fullWidth
              margin='normal'
              value={newTask}
              onChange={handleChange}
              error={error}
              helperText={error? " Please enter task name before savinf ": " "}
            />
            <TextField  
              label='Priority'
              select
              fullWidth
              value={newTaskPrioirty}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              SelectProps={{
                native: true,
              }}
            >
                <option value='High'>High</option>
                <option value='Medium'>Medium</option>
                <option value='Low'>Low</option>
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleModal}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
      </Dialog>
    </Box>
  )
}

export default CreateTask;