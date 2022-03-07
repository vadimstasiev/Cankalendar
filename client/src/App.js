import React from 'react';
import Router from './Router';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {

  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  );
};

export default App;
