import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import {Route, Switch} from "react-router-dom"
import Details from "./components/details/Details";
import OsoulAlsenaahD from "./components/osoulAlsenaahD/OsoulAlsenaahD";
import AltmoohAljadeedM from "./components/altmoohM/AltmoohAljadeedM";
import AltmoohS from "./components/altmoohS/AltmoohS";

import AltmoohConcrete from "./components/altmoohConcrete/AltmoohConcrete";

import AltmoohL from "./components/altmoohL/AltmooL";
import Categories from "./components/category/Categories";
import { Box} from "@mui/material";

import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return (
    <>
    
    <Box  >
   
        <Navbar />

        <Switch>
       
          <Route path="/" exact={true} component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/osoulAlsenaahD" component={OsoulAlsenaahD} />
          <Route path="/altmoohAljadeedM" component={AltmoohAljadeedM} />
          <Route path="/altmoohS" component={AltmoohS} />
          <Route path="/category" component={Categories} />
          <Route path="/altmoohConcrete" component={AltmoohConcrete} />
          <Route path="/altmoohL" component={AltmoohL} />
          <Route path="/contactForm" component={ContactForm} />
          {/* <Route exact path="/details" element={<Details />} /> */}
          {/* <Route exact path="/osoulAlsenaahD" element={<OsoulAlsenaahD />} />
          <Route exact path="/altmoohAljadeedM" element={<AltmoohAljadeedM />} /> */}

          {/* <Route exact path="/altmoohS" element={<AltmoohS/>} /> */}
          {/* <Route exact path="/category" element={<Categories/>} />

          <Route exact path="/altmoohConcrete" element={<AltmoohConcrete/>} />

          <Route exact path="/altmoohL" element={<AltmoohL/>} />
          <Route exact path="/contactForm" element={<ContactForm/>} /> */}
          
          
          
          
          </Switch>


      
      
      <Footer/>
      
      </Box>
      
    </>
  );
}

export default App;
