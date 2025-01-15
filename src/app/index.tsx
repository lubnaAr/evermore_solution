import { Container, Card, CssBaseline, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function App() {
  return (
    <>
      <CssBaseline />
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
        <Card sx={{ p: 4 }}>
          <Typography variant="subtitle2">Evermore Coding Challenge</Typography>
        </Card>
      </Container>
    </>
  );
}

export default App;
