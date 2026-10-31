import {BadgeCheck,Quote,Star,UserRound} from "lucide-react";
import "./home.css"
function CustomerSay(){
    const customer=[{
        para:"The craftsmanship is exceptional. The watch looks even better in person, and the finish feels premium. timora truly deliver what it promise",
        name:"Afrid S."
    },{
        para:"Elegant design with outstanding attention to detail. Perfect for both formal occasions and everyday wear. I'm really impressed with the quality and comfort",
        name:"Rahul M."
    },{
        para:"Beautiful packaging, excellect quality, and a sophisticated look. The watch exceeded my expectations. Absolutely worth it.",
        name:"Vikram K."
    }]
    return(<>
    <section className="CustomerSay">
        <div className="CustomerSay-heading">
            <h4>Testimonials</h4>
            <h1>What Customers Say</h1>
            <p>Real experience. Timeless satisfaction.</p>
        </div>
        <div className="CustomerSay-containers">
            {
                customer.map(function(item,index){
                    return(<div className="CustomerSay-container" key={index}>
                        <Quote className="quote"/>
                        <br/>
                        <Star size={19}/>
                        <Star size={19}/>
                        <Star size={19}/>
                        <Star size={19}/>
                        <Star size={19}/>
                        <p className="CustomerSay-para">{item.para}</p>
                        <div className="underline-para"></div>
                        <h3 className="CustomerSay-name"><UserRound/>  {item.name}</h3>
                        <p className="CustomerSay-verify"><BadgeCheck size={16}/> Verified Buyer</p>
                    </div>)
                })
            }
        </div>
    </section>
    </>)
}
export default CustomerSay