import Section1 from "./ShopSections/Section1/Section1";
import Section2 from "./ShopSections/Section2/Section2";
import Section3 from "./ShopSections/Section3/Section3";
import Section4 from "./ShopSections/Section4/Section4";
import Section5 from "./ShopSections/Section5/Section5";
import Footer from "./ShopSections/Footer/Footer";
import "./ShopSections/Section1/Section1.css";
function Shop() {
    return (
        <div className="Shop">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />

        </div>
    )
}
export default Shop;