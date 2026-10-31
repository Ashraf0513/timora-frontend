import { Mail,Phone,MapPin } from "lucide-react"

function ContactDetail(){
    return(<>
    <div className="Contactdetail-main">
        <div className="Contactdetail-matter">
            <p className="Header1">Contact Us</p>
            <h1 className="Header2">We'd Love<br/>to <span>Hear From You</span></h1>
            <p className="Header3">Have a question, feedback or just want to say hello?<br/>Our team is here to help.</p>
        </div>

        <div className="Contact-icons">
            <p className="icon-para"><Mail className="icons" size={27}/><span>Email<br/>care@timora</span></p>
            <p className="icon-para"><Phone className="icons" size={27}/><span>Call<br/>+91 9867453293</span></p> 
            <p className="icon-para"><MapPin className="icons" size={27}/><span>Location<br/>Hyderabad, India</span></p>
        </div>
    </div>
    </>)
}
export default ContactDetail