import "./signinlogin.css";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth, googleProvider } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [toggle, settoggle] = useState(true);
    const [login, setlogin] = useState(false)
    const [error, seterror] = useState({});
    const [autherror, setautherror] = useState("")
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [pass, setpass] = useState("");

    const navigate = useNavigate();

    function handleToggleOn() {
        settoggle(false)
    }
    function handleToggleOff() {
        settoggle(true)
    }
    function Email(event) {
        setemail(event.target.value)
    }
    function Phones(event) {
        setphone(event.target.value.replace(/\D/g, ""))
    }
    function Password(event) {
        setpass(event.target.value)
    }

    async function handleSignin() {
        if (!validate()) { return }
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            navigate("/login");
        } catch (error) {
            console.log("code", error.code);
            if (error.code === "auth/email-already-in-use") {
                setautherror("This email is already registered. Please log in.");
            } else if (error.code === "auth/invalid-email") {
                setautherror("Enter a valid email address.");
            } else if (error.code === "auth/weak-password") {
                setautherror("Password is too weak.");
            } else {
                setautherror("Something went wrong. Try again.");
            }
        } 
    }

    function validate() {

        const newError = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newError.email = "Email is required";
        } else if (!emailRegex.test(email.trim())) {
            newError.email = "Enter a valid email address"
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phone.trim()) {
            newError.phone = "Phone number is requried"
        } else if (!phoneRegex.test(phone.trim())) {
            newError.phone = "Enter a valid 10-digits mobile number";
        }

        if (pass.length < 7) {
            newError.pass = "Password must be at least 7 characters";
        }
        seterror(newError);
        return Object.keys(newError).length === 0;

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
        <div className="SignIn-bg">
            <div className="SignIn-main">
                <div className="SignIn-title">
                    <h1>Create Account</h1>
                    <p>Sign up to get started and explore</p>
                    <p>our exclusive collection.</p>
                </div>

                <div className="SignIn-content">
                    <div className="SignIn-input">
                        <label htmlFor="fullname">FULL NAME</label>
                        <div className="SignIn-inputicon">
                            <User />
                            <input type="text" placeholder="Enter your full name" id="fullname" />
                        </div>
                    </div>

                    <div className="SignIn-input">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <div className="SignIn-inputicon">
                            <Mail />
                            <input type="email" placeholder="Enter your email address" id="email" value={email} onChange={Email} />
                        </div>
                        {error.email && <p className="Signin-error">{error.email}</p>}
                    </div>

                    <div className="SignIn-input">
                        <label htmlFor="phonenumber">PHONE NUMBER</label>
                        <div className="SignIn-inputicon">
                            <Phone />
                            <input type="tel" placeholder="Enter your phone number" id="phonenumber" value={phone} onChange={Phones} />
                        </div>
                        {error.phone && <p className="Signin-error">{error.phone}</p>}
                    </div>

                    <div className="SignIn-input">
                        <label htmlFor="pass">PASSWORD</label>
                        <div className="SignIn-inputicon">
                            <Lock />
                            <input type={toggle ? "password" : "text"} placeholder="Create a password" id="pass" value={pass} onChange={Password} />
                            {
                                toggle ? <EyeOff onClick={handleToggleOn} /> : <Eye onClick={handleToggleOff} />
                            }
                        </div>
                        {error.pass && <p className="Signin-error">{error.pass}</p>}
                    </div>


                    <button className="SignIn-btn" onClick={handleSignin} disabled={login}>Sign Up</button>
                    {autherror && <p className="Signin-mainerror">{autherror}</p>}

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

                    <h4 className="LogIn-link">Already have an account? <Link to={"/login"} className="log">Log in</Link></h4>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}
export default SignIn