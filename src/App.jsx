import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Works from './components/Works';
import Footer from './components/Footer';

// App コンポーネントに Tailwind CSS を適用
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="container mx-auto mt-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
