import hero1 from "../assets/images/hero-section1.png";
import hero2 from "../assets/images/hero-section2.jpeg";
import hero3 from "../assets/images/hero-section3.png";
import hero4 from "../assets/images/hero-section4.png";
import { useEffect, useState } from "react";

function AboutHero(){
    const images=[hero2,hero4,hero1,hero3];
    
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
            <p className="hero-subtitle">About Us</p>
            <h1 className="hero-heading1">Time for<br/><p className="hero-heading2">What Matters</p></h1>
            <p className="hero-description">Timora blends craftmanship,style and precision<br/>to bring you watches that fit every moment<br/>of your life</p>

        </div>
       </section>
        </>)
}
export default AboutHero