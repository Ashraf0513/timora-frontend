import { Gem, ShieldCheck,UsersRound } from "lucide-react";
import "./about.css"

function AboutWhy() {
    return (<>
        <div className="features">
            <div className="feature">
                <Gem/>
                <h3>Timeless Design</h3>
                <p>Classic looks for every generation.</p>
            </div>
            <div className="feature">
                <ShieldCheck />
                <h3>Trust Quality</h3>
                <p>Built to last, always.</p>
            </div>
            <div className="feature">
                <UsersRound />
                <h3>Made for you</h3>
                <p>Designed for every moment.</p>
            </div>
        </div>

    </>)
}
export default AboutWhy