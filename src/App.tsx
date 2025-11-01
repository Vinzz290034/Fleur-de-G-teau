import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import { Shop } from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import CustomCake from "./pages/CustomCake";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom-cake" element={<CustomCake />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
