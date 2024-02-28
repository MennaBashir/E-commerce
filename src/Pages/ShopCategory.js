import Footer from "./ShopSections/Footer/Footer";
import { all_product } from "../Assets/db";
import Item from "./ShopSections/Item";
import "./ShopSections/Item.css";
function ShopCategory(props) {
    return (
        <>
            <div className="container banner">
                <img src={props.banner} alt=".." />
                <div className="popular">
                    {
                        all_product.map((el) => {
                            if (props.category === el.category) {
                                return (
                                    <Item id={el.id} K={el.id} image={el.image} name={el.name} new_price={el.new_price} old_price={el.old_price} />
                                )
                            }
                            else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
            <Footer />
        </>

    )
}
export default ShopCategory;

