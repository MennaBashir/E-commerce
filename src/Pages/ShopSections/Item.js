import "./Item.css";
import { Link } from "react-router-dom";
function Item(props) {
    return (

        <Link to={`/product/${props.K}`}>
            <div className="item" key={props.id} >
                <div className="imag">
                    <img src={props.image} alt="..." />
                </div>
                <div className="txt">
                    <p>{props.name}</p>
                    <div className="price">
                        <span className="new_p">${props.new_price}</span>
                        <span className="old_p">${props.old_price}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item;