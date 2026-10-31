import { Gem, ShieldCheck, Truck, Headset } from "lucide-react";
import "./home.css"
function WhyChoose() {
    return (<>
        <section className="why-choose">
            <div className="why-heading">
                <div className="why"></div>
                <h1>Why choose Timora</h1>
                <p>More than just a watch -it's a statement.</p>
            </div>
            <div className="features">
                <div className="feature">
                    <Gem />
                    <h3>Premium Quality</h3>
                    <p>Only the finest materials</p>
                </div>
                <div className="feature">
                    <ShieldCheck />
                    <h3>2 Year Warranty</h3>
                    <p>Peace of mind</p>
                </div>
                <div className="feature">
                    <Truck/>
                    <h3>Free Shipping</h3>
                    <p>Across India</p>
                </div>
                <div className="feature">
                    <Headset/>
                    <h3>24/7 Support</h3>
                    <p>We're here for you</p>
                </div>
            </div>
        </section>
    </>)
}

export default WhyChoose