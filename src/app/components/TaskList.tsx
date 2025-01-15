import React, { useContext, useState } from 'react';
import { Task } from '../../types';
import { Button, List, ListItem, ListItemText, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TaskContext from './TaskContext';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import TaskFilters from './TaskFilter';
import TaskActions from './TaskActions';

const TaskList = () => {
  const { tasks, updateTask, removeTask } = useContext(TaskContext);

  const [stateFilter, setStateFilter] = useState<'All' | 'To Do' | 'In Progress' | 'Done'>('All');
  const [priorityFilter, setPriorityFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const [deleteTask, setDeleteTask] = useState<{ id: number; name: string } | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editTask, setEditTask] = useState<{ id: number; name: string; priority: 'High' | 'Medium' | 'Low' } | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const getNextState = (currentState: Task['state']): Task['state'] => {
    if (currentState === 'To Do') return 'In Progress';
    if (currentState === 'In Progress') return 'Done';
    return 'To Do';
  };

  const handleStateChange = (task: Task) => {
    const nextState = getNextState(task.state);
    if (nextState === 'Done') {
      removeTask(task.id);
    } else {
      updateTask({ ...task, state: nextState });
    }
  };

  const handleOpenEditModal = (task: Task) => {
    setEditTask(task);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditTask(null);
    setEditModalOpen(false);
  };

  const handleOpenDeleteModal = (taskId: number, taskName: string) => {
    setDeleteTask({ id: taskId, name: taskName });
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteTask(null);
    setDeleteModalOpen(false);
  };

  const filteredAndSortedTasks = [...tasks]
    .filter((task) => {
      if (stateFilter !== 'All') return task.state === stateFilter;
      return task.state !== 'Done';
    })
    .filter((task) => {
      if (priorityFilter !== 'All') return task.priority === priorityFilter;
      return true;
    })
    .sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  if (filteredAndSortedTasks.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6">No tasks available!</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <TaskFilters 
        stateFilter={stateFilter}
        priorityFilter={priorityFilter}
        setStateFilter={setStateFilter}
        setPriorityFilter={setPriorityFilter}
      />

      <List>
        {filteredAndSortedTasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              borderBottom: '1px solid #ccc',
              padding: '10px 0',
            }}
          >
            <ListItemText
              primary={task.name}
              secondary={`Priority: ${task.priority}, State: ${task.state}`}
            />
            < TaskActions
                task={task}
                onStateChange={handleStateChange}
                onEdit={handleOpenEditModal}
                onDelete={handleOpenDeleteModal}
                getNextState={getNextState}
            />
          </ListItem>
        ))}
      </List>

      {editTask && (
        <EditTask
          taskId={editTask.id}
          taskName={editTask.name}
          taskPriority={editTask.priority}
          open={editModalOpen}
          onClose={handleCloseEditModal}
        />
      )}
      {deleteTask && (
        <DeleteTask
          taskId={deleteTask.id}
          taskName={deleteTask.name}
          open={deleteModalOpen}
          onClose={handleCloseDeleteModal}
        />
      )}
    </Box>
  );
};

export default TaskList;