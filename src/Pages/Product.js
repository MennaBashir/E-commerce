import { all_product } from "./../Assets/db";
import { useParams } from "react-router";
import star1 from "./../Assets/star_icon.png";
import star0 from "./../Assets/star_dull_icon.png";
import { useState } from "react";
import "./Product.css";
import Footer from "./ShopSections/Footer/Footer";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../Redux/Operation";
function Product() {
    const { productID } = useParams();
    const dispatch=useDispatch();
    const [fill1, setFill1] = useState(false);
    const [fill2, setFill2] = useState(false);
    const [fill3, setFill3] = useState(false);
    const [fill4, setFill4] = useState(false);
    const [fill5, setFill5] = useState(false);

    const ele = all_product.find((e) => {
        if (e.id === Number(productID)) {
            return e;
        }
    })
    return (
        <>
            <div className="container">
                <div className="product">
                    <div className="imag">
                        <div className="imagSub">
                            <img src={ele.image} alt=".." />
                            <img src={ele.image} alt=".." />
                            <img src={ele.image} alt=".." />
                            <img src={ele.image} alt=".." />
                        </div>
                        <div className="imagMain">
                            <img src={ele.image} alt=".." />
                        </div>
                    </div>
                    <div className="txt">
                        <h1>{ele.name}</h1>
                        <div className="rate">
                            <img src={fill1 ? star1 : star0} onClick={() => setFill1(!fill1)} alt="not" />
                            <img src={fill2 ? star1 : star0} onClick={() => setFill2(!fill2)} alt="not" />
                            <img src={fill3 ? star1 : star0} onClick={() => setFill3(!fill3)} alt="not" />
                            <img src={fill4 ? star1 : star0} onClick={() => setFill4(!fill4)} alt="not" />
                            <img src={fill5 ? star1 : star0} onClick={() => setFill5(!fill5)} alt="not" />
                        </div>
                        <div className="price">
                            <p>${ele.old_price}</p>
                            <p>${ele.new_price}</p>
                        </div>
                        <p className="desc">
                            A lightweight,usually knitted,pullover shirt,close-fitting and with a round neckline
                            and short sleeves, worn as an undershirt or outer garment
                    </p>
                        <div className="size">
                            <p>Select Size</p>
                            <p>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                                <span>XXL</span>
                            </p>
                        </div>
                        <button onClick={()=>dispatch(AddtoCart(ele))}>ADD TO CART</button>
                        <p><span>Category:</span>{ele.category}</p>
                        <p><span>Tags:</span>Modern,Latest</p>
                    </div>
                </div>
                <div className="info">
                    <div className="info1">
                        <h2>Product Description</h2>
                        <p>Enhance your breezy basic collection with this Sweatshirt brought to you by Andora. Crafted in a cotton composition for all day comfort, this sweatshirt is constructed in a pullover style and features long sleeves with a crew neckline, a straight hemline and ribbed trims for a simple yet stylish look.
                        </p>
                    </div>
                    <div className="info2">
                        <h2>Product Reviews</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Product;
