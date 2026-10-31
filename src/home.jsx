import Hero from "./hero.jsx"
import WhyChoose from "./whychoose.jsx";
import Nav from "./components/navbar.jsx";
import "./home.css";
import OurCollection from "./ourcollectio.jsx";
import BestSeller from "./bestseller.jsx";
import CustomerSay from "./constomersay.jsx";
import Footer from "./components/footer.jsx";

function Home(){
   return(<>
   <Nav/>
   <Hero/>
   <OurCollection/>
   <WhyChoose/>
   <BestSeller/>
   <CustomerSay/>
   <Footer/>
   </>) 
}

export default Home