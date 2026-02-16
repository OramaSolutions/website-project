import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Blogs from './pages/blogs/Blogs';
import Blog from './pages/blogs/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoCodePlatform from './pages/NoCodePlatform';
import Applications from './pages/Applications';
import ApplicationDetail from './pages/ApplicationDetail';
import Resources from './pages/Resources';
import useScrollToTop from './hooks/useScrollToTop';
import SeoManager from './components/SeoManager';
// import useLenis from './hooks/useLenis';

function App() {
  useScrollToTop();
  // useLenis()

  return (

    <div className="min-h-screen">
      <SeoManager />
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/applications' element={<Applications />} />
          <Route path='/applications/:applicationSlug' element={<ApplicationDetail />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/no-code-platform' element={<NoCodePlatform />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:blogId' element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
