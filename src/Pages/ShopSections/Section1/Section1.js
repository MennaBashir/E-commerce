import "./Section1.css";
import hand from "../../../Assets/hand_icon.png";
import Img from "../../../Assets/hero_image.png";
import arrow from "../../../Assets/arrow.png";
function Section1() {
    return (
        <div className="section1">
            <div className="container">
                <div className="txt">
                    <p>NEW ARRIVALS ONLY</p>
                    <img src={hand} alt="not found" />
                    <h2>new collections for everyone</h2>
                    <button className="btn">Latest Collection</button>
                    <img src={arrow} alt="not found.."/>
                </div>
                <div className="imag">
                    <img src={Img} alt="not found" />
                </div>
            </div>
        </div>
    )
}
export default Section1;