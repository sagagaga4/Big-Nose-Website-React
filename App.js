import React from "react";
import './App.css';
import Products from "./Products";
import { productData } from "./Products/data";
import Footer from "./Footer";
import Youtube from"./Youtube";
 


function App() {
  return (
    <body>
  <div id="page-wrap">
    <div className="app">
      <h1 style={{color:"Black",marginTop:"0px", fontSize:"100px", textAlign:"center", fontFamily:"Saira Stencil One",letterSpacing:"2px"}}>Big Nose</h1>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
      </style>
      <div style={{maxWidth:"0px"}}>
      <Products heading="ALBUMS" data={productData}/>
      </div>      
      <div style={{alignItems:"center",justifyContent:"center",display:"flex",background:"black",minHeight:"100vh",minWidth:"100%",margin:"0 auto"}}>
      <Youtube />
      </div>
      <Footer />
    </div>
    </div>
</body>

  );
}

export default App;
