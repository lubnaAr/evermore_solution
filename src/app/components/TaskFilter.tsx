import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface TaskFilterProps {
  stateFilter: 'All' | 'To Do' | 'In Progress' | 'Done';
  priorityFilter: 'All' | 'High' | 'Medium' | 'Low';
  setStateFilter: (value: 'All' | 'To Do' | 'In Progress' | 'Done') => void;
  setPriorityFilter: (value: 'All' | 'High' | 'Medium' | 'Low') => void;
}

const TaskFilters: React.FC<TaskFilterProps> = ({
  stateFilter,
  priorityFilter,
  setStateFilter,
  setPriorityFilter,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
      <FormControl size='small' variant='outlined'>
        <InputLabel>State</InputLabel>
        <Select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          label="State"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="ToDo">ToDo</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>

      <FormControl size='small' variant='outlined'>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          label="Priority"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>

      </FormControl>
    </Box>
  )
}

export default TaskFilters;