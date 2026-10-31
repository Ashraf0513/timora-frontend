import sports from "./assets/images/sportswatch3.png"
import classic from "./assets/images/classicwatch3.png"
import modern from "./assets/images/modernwatch3.png"
import luxury from "./assets/images/luxurywatch3.png";
import "./home.css";
import { WatchContext } from "./watchPage/watchcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function OurCollection(){

   const {setfilters}=useContext(WatchContext)
   const navigate=useNavigate()

   const images=[
    {image:classic,
        title:"Classic",
        descrip:"Timeless design"
   },{
    image:sports,
    title:"Sport",
    descrip:"Build for adventure"
   },{
    image:modern,
    title:"Modern",
    descrip:"For the Trendsetters"
   },{
    image:luxury,
    title:"Luxury",
    descrip:"Exquisite craftsmanship"
   }]


   function openCategory(cat){
    setfilters([cat]);
    navigate("/watchcollection")
   }

    return(<>
    <section className="OurCollection">
        <div className="OurCollection-heading">
            <div></div>
            <h1>Our Collection</h1>
            <p>Discover watches crafted for every style and occasion</p>
        </div>
        <div className="OurCollection-containers">
           
                {
                    images.map(function(item){
                        return(<div key={item.title} className="OurCollection-container">
                        <img src={item.image} alt={item.title}></img>
                        <h4>{item.title}</h4>
                        <p>{item.descrip}</p>
                        <button onClick={()=>openCategory(item.title)}>View Collection →</button>
                        </div>)
                    })
                }
        </div>
    </section>
    </>)
}
export default OurCollection