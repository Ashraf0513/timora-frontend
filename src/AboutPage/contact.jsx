import ContactDetail from "./contactdetail"
import ContactForm from "./contactform"
import "./about.css";

function Contact(){
    return(<>
    <section className="Contact-main">
        <ContactDetail/>
        <ContactForm/>
    </section>
    </>)
}
export default Contact