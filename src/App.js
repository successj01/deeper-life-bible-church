//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from "react-router-dom";

// === components === //
//import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// === Homes Page === //
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Prayer from "./pages/Prayer";
import Login from "./pages/Login";
import Give from "./pages/Give";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    
    <div className="min-h-screen flex flex-col font-poppins"> 
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
   
      </main>

      <Footer />
        
        
    </div>
    
  );
}

export default App;