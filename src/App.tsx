import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouteLayout from './routes/routeLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page route */}
        <Route path="/" element={<RouteLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


