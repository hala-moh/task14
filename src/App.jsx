import { Routes, Route } from "react-router-dom";
import Navbar from "./compnent/Navbar/Navbar";
import BlogDetails from "./compnent/BlogDetails/BlogDetails";
import './App.css'
import HomePage from './compnent/HomePage/HomePage';
import BlogPage from "./compnent/BlogPage/BlogPage"
import About from "./compnent/About/About"
import Footer from "./compnent/Footer/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blogs" element = {<BlogPage/>}/>
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element= {<About/>}/>
        
      </Routes>
<Footer/>

    </>
  );
}
export default App;