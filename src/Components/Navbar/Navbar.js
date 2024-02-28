import "./Navbar.css";
import logo from "../../Assets/logo_big.png";
import cart from "../../Assets/cart_icon.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const state = useSelector(state => state.operation);
    let Total = state.reduce((acc, current) => {
        acc += current.quantity;
        return acc

    }, 0)
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
                <div className="container-fluid">
                    <div className="logo">
                        <img src={logo} alt="not found.." />
                        <p className="navbar-brand" href="#">Buyerly</p>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/mens">Men</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/womens">Women</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/kids">Kids</NavLink>
                        </li>
                    </ul>
                    <div className="login">
                        <NavLink to="/login" ><button className="btn">Login</button></NavLink>
                        <NavLink to="/cart" > <img src={cart} alt="not found.." /></NavLink>
                        <span>{Total}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;