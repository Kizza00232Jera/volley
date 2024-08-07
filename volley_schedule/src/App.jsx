import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Knockout from './pages/Knockout';
import HomePage from './pages/HomePage';
import Matches from './pages/Matches';
import Standings from './pages/Standings';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/knockout" element={<Knockout />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;