import { useState } from "react";
import axios from "axios"

function ContactForm(){

   const [name,setname]=useState("");
   const [email,setemail]=useState("");
   const [option,setoption]=useState("");
   const [msg,setmsg]=useState("");

   function handleSend(){
      axios.post("https://timora-backend.vercel.app/about",{name:name,email:email,option:option,msg:msg}).then(()=>console.log(alert("Thanks for your response"))).catch((error)=>console.log(alert(error.message)))
   }
   
    console.log(option)
    return(<>
    <div className="Contactform-main">
        <input type="text" placeholder="Your Name" onChange={(e)=>setname(e.target.value)}></input>
        <input type="email" placeholder="Your Email" onChange={(e)=>setemail(e.target.value)}/>
        <select className="subject" onChange={(e)=>setoption(e.target.value)} >
            <option value={""}>Select a subject</option>
            <option value={"general enquiry"}>General Enquiry</option>
            <option value={"product enquiry"}>Product Enquiry</option>
            <option value={"order status"}>Order Status</option>
            <option value={"return or refund"}>Return or Refund</option>
            <option value={"customer support"}>Customer Support</option>
            <option value={"other"}>Other</option>
        </select>
        <textarea rows={8} placeholder="Your Message" onChange={(e)=>setmsg(e.target.value)}/>

        <button className="msg-btn" onClick={handleSend}>Send Message →</button>
    </div>
    </>)
}
export default ContactForm