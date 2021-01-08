import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const Flipinfo = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
}, []);
return (
    <div>
        <p style={{alignItems:"center",color:"white"}} data-aos="fade-up" class="About-info">"There Is No Fear"</p>



        
    </div>
    );  
};

export default Flipinfo;