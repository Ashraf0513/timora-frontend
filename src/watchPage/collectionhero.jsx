import hero1 from "../assets/images/hero-section1.png";
import hero2 from "../assets/images/hero-section2.jpeg";
import hero3 from "../assets/images/hero-section3.png";
import hero4 from "../assets/images/hero-section4.png";
import { useEffect, useState } from "react";

function CollectionHero(){
    const images=[hero3,hero2,hero1,hero4];
    
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
            <h1 className="hero-heading1">Explore Our<br/><span className="hero-heading2">Watches</span></h1>
            <p className="hero-description">Timora blends craftmanship,style and precision<br/>to bring you watches that fit every moment<br/>of your life</p>
        </div>
       </section>
        </>)
}
export default CollectionHero