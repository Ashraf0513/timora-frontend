import timora from "../assets/images/timora-nav1.png";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink ,useNavigate} from "react-router-dom"
import "../navbar.css";
import { useContext, useEffect, useState } from "react";
import { WatchContext } from "../watchPage/watchcontext";
import {auth} from "../Sign&Login/firebase"
import { signOut } from "firebase/auth";

function Nav() {
     const navigate=useNavigate()
     const {cardindex=[]}=useContext(WatchContext);

     const cardcount=cardindex.reduce((s,c)=>s+c.qty,0)

    const [log ,setlog]=useState(false);

    useEffect(function(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                setlog(true)
            }
            else{
                setlog(false)
            }
        })
    })

    function logout(){
        signOut(auth)
    }

    return (<>
        <nav className="nav-main">
            <div className="navbar">
                <div className="navbar-img">
                    <img src={timora} alt="Timora logo"></img>
                </div>
                <div className="pages">
                    <NavLink className="page-link" id="page1" to={"/"}>Home</NavLink>
                    <NavLink className="page-link" id="page2" to={"/watchcollection"}>Watches</NavLink>
                    <NavLink className="page-link" id="page3" to={"/about"}>About</NavLink>
                </div>
                <div className="navbar-icons">
                    <div className="User">
                        <Heart onClick={()=>navigate("/wishlist")}/>
                    </div>
                    
                    <div className="Shoppingcart">
                        <p className="Shoppingcart-count">{cardcount}</p>
                        <ShoppingCart className="icon" onClick={()=>{navigate("/cart")}} />
                    </div>
                    {log?<Link className="Logout-btn" onClick={logout}>Logout</Link>:<Link className="signin-btn" to={"/signin"}>Sign in</Link>}
                    
                </div>
                
            </div>
        </nav>
        
    </>)
}

export default Nav