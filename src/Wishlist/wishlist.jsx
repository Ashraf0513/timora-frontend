import "./wishlist.css";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import images from "../watchPage/watchesData/watchdata";
import { WatchContext } from "../watchPage/watchcontext";
import { useContext, useEffect } from "react";
import { ShoppingCart, Star} from "lucide-react";
import { useNavigate } from "react-router-dom";

function WishList() {
    const { index: wishlist ,removeindex} = useContext(WatchContext);
    const navigate=useNavigate();

    

   
    return (<>
        <Nav />
        <div className="Wishlist-bg">
            <div className="Wishlist-section">
                <div className="Wishlist-containers">
                    {
                        wishlist.map(function (item,index) {
                            return (
                                <div className="Wishlist-container" key={index} onClick={()=>navigate("/watch/"+item)}>
                                    <img src={images[item].image} />
                                    <h3 className="Watch-title">{images[item].title}</h3>
                                    <p className="Watch-category">{images[item].cat} | {images[item].cat2}</p>
                                    <h3 className="Watch-price">{images[item].price}</h3>
                                    <p className="Watch-star"><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />{images[item].star}{images[item].reviewRate}</p>
                                    <button className="Wishlist-addtocart">Add to Cart<ShoppingCart size={13}/></button>
                                    <button className="Wishlist-delete" onClick={(e)=>{if(window.confirm("Remove this watch from wishlist?")){e.stopPropagation();removeindex(item)}}}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default WishList