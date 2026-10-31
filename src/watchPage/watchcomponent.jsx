import Watches from "./pagecollection.jsx";
import Filter from "./watchfilter.jsx";
import "./watchpage.css"
import { WatchContext } from "./watchcontext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

function WatchComponents() {
    const {user,authloading}=useContext(WatchContext);

    if(authloading){
        return <p className="Watch-message">Loading.....</p>
    }
    if(!user){
        return(
            <div className="Watch-message">
                <h2>Please Signin to view the watch collection</h2>
                <Link to={"/signin"} className="Watch-signin-link">Signin</Link>
            </div>
        )
    }



    return (
        <div className="component">
            <div className="WatchPage-1">
                <div className="WatchPage-underline"></div>
                <h1 className="WatchPage-title">All Watches</h1>
                <p className="WatchPage-descrip">Showing 6 of 24 watches</p>
            </div>
            <div className="WatchPage-2">
                <Filter />
                <Watches />
            </div>

        </div>)
}
export default WatchComponents