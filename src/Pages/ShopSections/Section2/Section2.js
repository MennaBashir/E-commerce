import "../Item.css";
import Item from "../Item";
import { popular } from "../../../Assets/db";
function Section2() {

    return (
        <div className="container sec2">
            <h1>Popular in women</h1>
            <hr />
            <div className="popular">
                {popular.map((el) => {
                    return (
                        <Item id={el.id} K={el.id} image={el.image} name={el.name} new_price={el.new_price} old_price={el.old_price} />
                    )
                })}
            </div>
        </div>
    )
}
export default Section2;