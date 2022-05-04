import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<ContactPage />} />
    </Routes>
  );
};
