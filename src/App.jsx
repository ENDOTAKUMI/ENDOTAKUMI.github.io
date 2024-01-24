import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import ScreenC from './components/ScreenC';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ScreenA />} />
        <Route path="/a" element={<ScreenA />} />
        <Route path="/b" element={<ScreenB />} />
        <Route path="/c" element={<ScreenC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
