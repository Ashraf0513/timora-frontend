import Nav from "../components/navbar";
import Footer from "../components/footer";
import "./signinlogin.css";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth ,googleProvider} from "./firebase";


function Login() {
    const [toggle, settoggle] = useState(false);
    const [check, setcheck] = useState(false);
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();

    function handleToggleOn() {
        settoggle(false)
    }
    function handleToggleOff() {
        settoggle(true)
    }
    function handleChecked(event) {
        if (event.target.checked == true) {
            setcheck(true)
        }
        else {
            setcheck(false)
        }
    }
    async function handleLogin() {
        try {
            await signInWithEmailAndPassword(auth, email, pass).then(()=>navigate("/home")).catch((error)=>seterror("Wrong password or email"))   
        } catch (error) {
            seterror(error)
        }
    }

     async function handleGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/home")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (<>
        <Nav />
        <div className="LogIn-bg">
            <div className="LogIn-main">
                <div className="LogIn-title">
                    <h1>Welcome Back</h1>
                    <p>Log in to your account to access your</p>
                    <p>orders, wishlist and more</p>
                </div>

                <div className="LogIn-form">
                    <div className="LogIn-input">
                        <h5>EMAIL ADDRESS</h5>
                        <div className="LogIn-icons">
                            <Mail />
                            <input type="email" placeholder="Enter your email address" onChange={(e) => setemail(e.target.value)} />
                        </div>
                    </div>

                    <div className="LogIn-input">
                        <h5>PASSWORD</h5>
                        <div className="LogIn-icons">
                            <Lock />
                            <input type={toggle ? "text" : "password"} placeholder="Enter your password" onChange={(e) => setpass(e.target.value)} />
                            {
                                toggle ? <Eye onClick={handleToggleOn} /> : <EyeOff onClick={handleToggleOff} />
                            }
                        </div>
                    </div>
                </div>

                <div className="rem-forgot">
                    <div className="Remember">
                        <input onClick={handleChecked} type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <p>Forgot password?</p>
                </div>

                <p className="Login-error">{error}</p>

                <button disabled={!check} className="LogIn-btn" onClick={handleLogin}>Login</button>
                

                <div className="divider"><span>OR</span></div>

                <button type="button" className="google-btn" onClick={handleGoogle}>
                    <svg width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
                        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z" />
                        <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
                        <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.500 42.600 14.600 48 24 48z" />
                    </svg>
                    <span>Continue with Google</span>
                </button>

                <div className="Dont">
                    <p>Don't have an account? <Link to={"/signin"} className="signin-link">Sign Up</Link></p>
                </div>

            </div>
        </div>
        <Footer />
    </>)
}
export default Login