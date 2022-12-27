import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import OsoulAlsenaahD from "./components/osoulAlsenaahD/OsoulAlsenaahD";
import AltmoohAljadeedM from "./components/altmoohM/AltmoohAljadeedM";
import AltmoohS from "./components/altmoohS/AltmoohS";

import AltmoohConcrete from "./components/altmoohConcrete/AltmoohConcrete";

import AltmoohL from "./components/altmoohL/AltmooL";
import Categories from "./components/category/Categories";
import Recents from "./components/recents/Recents";
import { Box,Stack} from "@mui/material";

import Hero from "./components/hero/Hero";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return (
    <>
    
    <Box  >
      <Navbar />
      {/* <Hero/> */}
      
      <BrowserRouter>
     
      
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/osoulAlsenaahD" element={<OsoulAlsenaahD />} />
          <Route path="/altmoohAljadeedM" element={<AltmoohAljadeedM />} />

          <Route path="/altmoohS" element={<AltmoohS/>} />

          <Route path="/altmoohConcrete" element={<AltmoohConcrete/>} />

          <Route path="/altmoohL" element={<AltmoohL/>} />
          <Route path="/contactForm" element={<ContactForm/>} />
          
          
          
          
        </Routes>
        
      </BrowserRouter>
      
      
      <Footer/>
      
      </Box>
      
    </>
  );
}

export default App;
