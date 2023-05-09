import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from '@/screens/HomeScreen';

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
