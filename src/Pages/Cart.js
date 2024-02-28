import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { RemoveProduct } from "./../Redux/Operation";
import Remov from "./../Assets/cart_cross_icon.png";
import Footer from "./ShopSections/Footer/Footer";

function Cart() {

     const state = useSelector(state => state.operation);
    const dispatch = useDispatch();
    const Total1 = state.reduce((acc, current) => {
        acc += current.new_price * current.quantity;
        return acc;
    }, 0);

    return (
        <>
            <div className="container">
                <div className="Keep">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((el) => {
                                    return (
                                        <tr>
                                            <td className="imag"><img src={el.image} alt=".." /></td>
                                            <td className="parg">{el.name}</td>
                                            <td className="price">${el.new_price}</td>
                                            <td className="quant">{el.quantity}</td>
                                            <td className="price">${el.new_price * Number(el.quantity)}</td>
                                            <td><img src={Remov} alt=".." onClick={() => dispatch(RemoveProduct(el))} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="Total">
                    <div className="price">
                        <h2>Cart Totals</h2>
                        <p>Subtotal<span>${Total1}</span></p>
                        <p>Shipping Free<span>Free</span></p>
                        <h3>Total<span>${Total1}</span></h3>
                    </div>
                    <div className="promo">
                        <p>if you have a promo code,Enter it here</p>
                        <div className="Input">
                            <input type="text" name="promo" placeholder="promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}
export default Cart;