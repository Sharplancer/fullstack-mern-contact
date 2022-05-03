import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

export const App = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
        <Routes>
          <Route path='/' element={<ContactPage />} />
        </Routes>
      </Box>
    </Box>
  );
};
