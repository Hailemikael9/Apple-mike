import React from 'react';
 import Header from "./Header/Header"
  import Footer from "./Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mac from './A-Product/Mac';
import Four04 from './A-Product/Four04';
import Productpage from "./A-Product/ProductPage"
import Iphone from "./A-Product/Iphone"
import Main from "./Main/Main"
  function App() {
    return (
      <Router>
        
        <Header />
       
          <Routes>
            <Route path="/" element={<Main/>} /> 
             <Route path="/mac" element={<Mac/>} />
              <Route path="/iphone" element={<Iphone />} /> 
           <Route path="/iphone/:pid" element={<Productpage />} />
            <Route path="/" element={<Four04 />} /> 
          </Routes>
          <Footer />
        
     </Router>
  
    );
  }
  
  export default App;
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 

