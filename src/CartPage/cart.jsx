import Footer from "../components/footer"
import Nav from "../components/navbar"
import "./cart.css";
import images from "../watchPage/watchesData/watchdata"
import { Trash2 } from "lucide-react";
import { useContext, useEffect } from "react";
import { WatchContext } from "../watchPage/watchcontext";
import { useNavigate } from "react-router-dom";


function Cart() {
    const { cardindex ,removeCartIndex,changeQty} = useContext(WatchContext);
    const navigate=useNavigate()

    
    
    function toNumber(p){
        return Number(String(p).replace(/[^0-9.]/g,""));
    }

    const total = cardindex.reduce((sum,c)=>{
        const w=images[c.id];
        return w?sum+toNumber(w.price)*c.qty:sum;
    },0)

    



    return (<>
        <Nav />
        <div className="Cart-section">
            <div className="Cart-main">
                <div className="Cart-left">
                    <div className="Cart-left_heading">
                        <h1>Shopping Cart</h1>
                        <p>Your selected timepieces, all in one place.</p>
                    </div>
                    <div className="Cart-left_main">
                        <div className="Cart-subheading">
                            <p>PRODUCT</p>
                            <div className="Cart-subheading2">
                                <p>QUANTITY</p>
                                <p>PRICE</p>
                            </div>
                        </div>
                        <div className="Cart-containers">
                            {cardindex.map(function (c) {
                                const watch=images[c.id];
                                if(!watch) return null;
                                return (
                                    <div className="Cart-container" key={c.id} onClick={()=>navigate("/watch/"+c.id)}>
                                        <div className="Cart-information">
                                            <img src={watch.image}></img>
                                            <div className="Cart-information2">
                                                <h3>{watch.title}</h3>
                                                <p>{watch.cat} | {watch.cat2}</p>
                                                <h3 className="Cart-watch_price">{watch.price}</h3>
                                                <button onClick={(e)=>{if(window.confirm("Do you want to remove this watch from Cart?")){
                                                    e.stopPropagation(),removeCartIndex(c.id)
                                                }}}><Trash2 size={18} /> Remove</button>
                                            </div>
                                        </div>
                                        <div className="Cart-priceAndQuantity">
                                            <div className="Cart-counter">
                                                <button className="Counter-btn" onClick={(e)=>{e.stopPropagation();changeQty(c.id,-1)}}>-</button>
                                                <p>{c.qty}</p>
                                                <button className="Counter-btn" onClick={(e)=>{e.stopPropagation();changeQty(c.id,1)}}>+</button>
                                            </div>
                                            <div className="Cart-price">
                                                <p>{watch.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="Cart-right">
                    <h2>Order Summary</h2>
                    <div className="Cart-subtotal">
                        <p>Subtotal ({cardindex.length})</p>
                        <p>₹{total.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="Cart-shipping">
                        <p>Shipping</p>
                        <p className="Cart-shipping_free">Free</p>
                    </div>
                    <div className="Cart-total">
                        <h2>Total</h2>
                        <h2>₹{total.toLocaleString("en-IN")}</h2>
                    </div>
                    <button className="Proceed-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}

export default Cart