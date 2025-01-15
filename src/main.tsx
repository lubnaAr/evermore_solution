import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './state/store';
import App from './app/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
