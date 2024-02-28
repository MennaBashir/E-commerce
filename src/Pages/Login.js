import Footer from "./ShopSections/Footer/Footer";
import "./Login.css";
import Swal from 'sweetalert2';
import { useRef, useState } from "react";
function Login() {
    const [check, setCheck] = useState();
    const InputRef = useRef(null);
    const InputRef2 = useRef(null);
    const formSubmit = (e) => {
        if (InputRef.current.value === "" ||InputRef2.current.value === "" ) {
            e.preventDefault();
            Swal.fire({
                icon: "error",
                text: "This field required",
            });
        }
        if (!check) {
            e.preventDefault();
            document.querySelector(".check p").style.color = "#ff4141";
        }
        else{
            document.querySelector(".check p").style.color = "#5c5c5c";
        }

    }
    return (
        <>
            <div className="Login">
                <div className="box">
                    <h1>Login</h1>
                    <div className="Input">
                        <form onSubmit={(e) => formSubmit(e)}>
                            <input type="email" name="name" placeholder="Email address" ref={InputRef} />
                            <input type="password" name="password" placeholder="Password" ref={InputRef2}/>
                            <button >Continue</button>
                        </form>
                    </div>
                    <p>Create an acount?<a hreg="#">Click here</a></p>
                    <div className="check">
                        <input type="checkbox" onChange={e => setCheck(e.target.checked)}  />
                        <p>By continuing, i agree to the terms of use & privacy policy.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Login;