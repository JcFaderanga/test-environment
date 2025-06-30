import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css'

import RouteLayout from '@/routes/routeLayout';

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


