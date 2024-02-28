import "./Footer.css";
import logo from "../../../Assets/logo_big.png";
import icon1 from "../../../Assets/instagram_icon.png";
import icon2 from "../../../Assets/pintester_icon.png";
import icon3 from "../../../Assets/whatsapp_icon.png";

function Footer() {
    return (
        <div className="container footer">
            <div className="logo">
                <img src={logo} alt="not found.." />
                <p className="navbar-brand" href="#">Buyerly</p>
            </div>
            <ul className="List1">
                <li><a href="#">Company</a> </li>
                <li><a href="#">Products</a> </li>
                <li><a href="#">Offices</a> </li>
                <li><a href="#">About</a> </li>
                <li><a href="#">Contact</a> </li>
            </ul>
            <ul className="List2">
                <li><a href="#"><img src={icon1} alt="..." /> </a> </li>
                <li><a href="#"><img src={icon2} alt=".." /></a> </li>
                <li><a href="#"><img src={icon3} alt=".." /></a> </li>
            </ul>
            <div className="copyRight">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}
export default Footer;