import "./Section3.css";
import  Img  from "../../../Assets/exclusive_image.png";
function Section3() {
    return (
        <div className="container sec3">
            <div className="txt">
                <h1>Exclusive Offers For You</h1>
                <p>Only on best sellers products</p>
                <button className="btn">Check now</button>
            </div>
            <div className="imag">
                <img src={Img} alt=".." />
            </div>
        </div>
    )
}
export default Section3;