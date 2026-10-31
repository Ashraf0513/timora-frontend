import hero1 from "./assets/images/hero-section1.png";
import hero2 from "./assets/images/hero-section2.jpeg";
import hero3 from "./assets/images/hero-section3.png";
import hero4 from "./assets/images/hero-section4.png";
import { useEffect, useState } from "react";
import {useNavigate}from "react-router-dom"

function Hero(){
    const navigate=useNavigate()
    const images=[hero1,hero2,hero3,hero4];

   const [currentimage,setcurrentimage]=useState(0);

   useEffect(()=>{
    const interval=setInterval(()=>{
        setcurrentimage((prev)=>(prev+1)%images.length);
    },5000);
    return()=>clearInterval(interval)
   },[])
    return(<>
    <section className="hero" style={{backgroundImage:`url(${images[currentimage]})`}}>
    <div className="hero-content">
        <p className="hero-subtitle">Timeless Elegance</p>
        <h1 className="hero-heading1">More Than Just<br/><span className="hero-heading2">A Watch</span></h1>
        <p className="hero-description">Timora blends craftmanship,style and precision<br/>to bring you watches that fit every moment<br/>of your life</p>
        <div className="hero-button">
            <button className="shop-btn" onClick={()=>navigate("/watchcollection")}>Shop Now →</button>
            <button className="explore-btn" onClick={()=>navigate("/watchcollection")}>Explore Collection</button>
        </div>
    </div>
   </section>
    </>)
}
export default Hero