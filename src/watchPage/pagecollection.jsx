import "./watchpage.css";
import images from "./watchesData/watchdata";
import {Heart, ShoppingCart, Star} from "lucide-react";
import { WatchContext } from "./watchcontext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Sign&Login/firebase";

function Watches(){
   const {index: wishlist=[],addindex,addCartIndex,filters,straps,minprice,maxprice}=useContext(WatchContext);
   const navigate=useNavigate();

   function toNumber(p){
    return Number(String(p).replace(/[^0-9.]/g,""));
   }

   useEffect(function (){
    auth.onAuthStateChanged((user)=>{
        if(!user){
            return null
        }
    })
   })

    return(<>
    <div className="Watch-main">
        <div className="Watch-containers">
        {
            images.map(function(item,index){
                if(filters.length>0 && !filters.includes(item.cat)){
                    return null
                }
 
                if(straps.length>0 && !straps.includes(item.cat2)){
                    return null
                }               

                const price=toNumber(item.price);

                if(price<minprice || price>maxprice){
                    return null
                }

                const liked=wishlist.includes(index);
                return(
                    <div className="Watch-container" key={index} onClick={()=>navigate("/watch/"+index)}>
                        <img src={item.image}></img>
                        <div className="Watch-heart">
                            <Heart key={index} onClick={(e)=>{e.stopPropagation();addindex(index);}} color={liked?"#D4AF37":"white"} fill={liked?"#D4AF37":"none"} style={{position:"absolute", top:"8px",right:"10px",cursor: "pointer"}}></Heart>
                        </div>
                        <h3 className="Watch-title">{item.title}</h3>
                        <p className="Watch-category">{item.cat} | {item.cat2}</p>
                        <h3 className="Watch-price">{item.price}</h3>
                        <p className="Watch-star"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/>{item.star}{item.reviewRate}</p>
                        <div className="Watch-btn">
                            <button className="viewdetail-btn" onClick={()=>navigate("/watch/"+index)}>View Details →</button>
                            <button className="addtocart-btn" onClick={(e)=>{e.stopPropagation();addCartIndex(index)}}>Add to Cart<ShoppingCart size={12}/></button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
    </>)
}
export default Watches