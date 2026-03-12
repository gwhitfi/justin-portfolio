import Navbar from './component/Navbar'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Resume from './pages/Resume'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </ BrowserRouter>
  )
}

export default App;
