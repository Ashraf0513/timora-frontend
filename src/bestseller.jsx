import sport from "./assets/images/sportwatches1.png"
import classic from "./assets/images/classicwatches1.png"
import modern from "./assets/images/modernwatches1.png"
import luxury from "./assets/images/luxurywatches1.png";
import {Heart,Star} from "lucide-react";
import "./home.css";
import { Link } from "react-router-dom";

function BestSeller(){
    const images=[{
        image:sport,
        title:"Timora Sport",
        price:"₹15,999",
        review:"(97)",
    },{
        image:classic,
        title:"Timora Classic",
        price:"₹12,999",
        star:<Star size={17}/>,
        review:"(165)",
    },{
        image:modern,
        title:"Timora Modern",
        price:"₹18,999",
        review:"(234)",
    },{
        image:luxury,
        title:"Timora Luxury",
        price:"₹22,999",
        star:<Star size={17}/>,
        review:"(43)",
    }]

    return(<>
    <section className="bestSeller">
        <div className="bestSeller-heading">
            <div className="bestSeller-heading1">
                <div className="overline"></div>
                <h1>Best Sellers</h1>
                <p>Most loved. Most Trusted</p>
            </div>
            <Link className="viewall" to={"/watchcollection"}>View All →</Link>
        </div>
        <div className="bestSeller-containers">
            {
                images.map(function(item,index){
                    return(<div className="bestSeller-container" key={index}>
                        <img src={item.image}></img>
                        
                        <div className="bestSeller-details">
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <p className="bestSeller-star"><Star size={17}/><Star size={17}/><Star size={17}/><Star size={17}/>{item.star} {item.review}</p>
                        </div>
                    </div>)
                })
            }
        </div>
    </section>
    </>)
}
export default BestSeller