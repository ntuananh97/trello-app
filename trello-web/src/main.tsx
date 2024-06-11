import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { AppProvider } from './AppContext.tsx';
import './styles/index.scss'
import { Provider } from 'react-redux';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </AppProvider>
  </React.StrictMode>
);
