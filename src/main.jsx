import React from 'react';
import ReactDOM from 'react-dom/client';

import {AuthProvider} from "./hooks/auth";

import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import {Routes} from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
