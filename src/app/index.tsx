import { Container, CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import { TaskProvider } from './components/TaskContext';




function App() {
  

  return (
    <>
      <CssBaseline />
      <TaskProvider>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: '100vh',
          background: grey[200],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       < CreateTask />
       <TaskList />
      </Container>
      </TaskProvider>
    </>
  );
}

export default App;
