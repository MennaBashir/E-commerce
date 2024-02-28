import { new_collections } from "../../../Assets/db";
import Item from "../Item";
function Section4() {
    return (
        <div className="container sec2">
            <h1>New Collections</h1>
            <hr />
            <div className="popular">
                {
                    new_collections.map((el) => {
                        return (
                               <Item id={el.id}  K={el.id} image={el.image} name={el.name} new_price={el.new_price} old_price={el.old_price} />
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Section4;