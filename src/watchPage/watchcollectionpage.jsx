import Nav from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import "./watchpage.css";
import CollectionHero from "./collectionhero.jsx";
import WatchComponents from "./watchcomponent.jsx";
function WatchCollection(){
    return(<>
    <Nav/>
    <CollectionHero/>
    <WatchComponents/>
    <Footer/>
    </>)
}
export default WatchCollection