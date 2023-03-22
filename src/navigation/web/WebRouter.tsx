
import HomeScreen from '@/screens/HomeScreen';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const WebRouter = () => {
  return (<BrowserRouter>
    <Routes>
      <Route element={<HomeScreen />} path="/" />
    </Routes>
  </BrowserRouter>);
}

export default WebRouter;