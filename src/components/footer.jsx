import "./footer.css";
import footerImg from "../assets/images/timorafooter1.png";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-brands"
function Footer() {
    return (<>
        <section className="footers">
            <div className="footer-main">
                <div className="footer">
                    <div className="footer1">
                        <img src={footerImg}></img>
                        <div className="footer1-icons">
                            <Instagram /><Facebook /><Twitter /><Youtube />
                        </div>
                        
                    </div>
                    <div className="footer2">
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>Watches</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer3">
                        <p>Customer Care</p>
                        <p>FAQs</p>
                        <p>Shipping</p>
                        <p>Return</p>
                        <p>Track Order</p>
                    </div>
                    <div className="footer4">
                        <p>Follow</p>
                        <div className="footer4-icons">
                            <Instagram /><Facebook /><Twitter /><Youtube />
                        </div>
                        
                    </div>
                </div>
                <div className="footer-last">
                    <p>&copy;2026 Timora All rights reserved</p>
                    <p>Crafted for Every Moment</p>
                </div>
            </div>

        </section>
    </>)
}
export default Footer