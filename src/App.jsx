import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import ScreenC from './components/ScreenC';
import Footer from './components/Footer';

// App コンポーネントに Tailwind CSS を適用
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="container mx-auto mt-8 flex-grow">
          <Routes>
            <Route path="/" element={<ScreenA />} />
            <Route path="/a" element={<ScreenA />} />
            <Route path="/b" element={<ScreenB />} />
            <Route path="/c" element={<ScreenC />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
