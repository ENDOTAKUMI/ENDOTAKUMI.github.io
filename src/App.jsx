import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import ScreenC from './components/ScreenC';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<ScreenA />} />
          <Route path="/a" element={<ScreenA />} />
          <Route path="/b" element={<ScreenB />} />
          <Route path="/c" element={<ScreenC />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
