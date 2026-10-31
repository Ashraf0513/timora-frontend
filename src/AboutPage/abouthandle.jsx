import Nav from "../components/navbar"
import AboutHero from "./abouthero";
import Footer from "../components/footer";
import AboutWhy from "./aboutwhy";
import Contact from "./contact";

function About(){
    return(<>
    <Nav/>
    <AboutHero/>
    <AboutWhy/>
    <Contact/>
    <Footer/>
    </>)
}
export default About