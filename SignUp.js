import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// export default function (props) {
   
   const SignUp=() =>{
    // let [authMode, setAuthMode] = useState("signin")

    // const changeAuthMode = () => {
    //     setAuthMode(authMode === "signin" ? "signup" : "signin")
    // }
     const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })
 const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval({
                ...inpval,
                [name]: value
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "") {
            toast.error(' Name field is required!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('Email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter valid email address', {
                position: "top-center",
            });
        }
        else if (password === "") {
            toast.error('Password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length should be atleast 8', {
                position: "top-center",
            });
        } else {
            toast.success('User Registered Successfully', {
                position: "top-center",
            });
            history("/SignIn")
            setData([...data,inpval])
             localStorage.setItem("user_add", JSON.stringify([...data, inpval]));
            
           console.log(setData);
        }

    } 
   

    return (

        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary">
                            <NavLink to="/SignIn">Sign In</NavLink>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            required
                            className="form-control mt-1"
                            placeholder="Enter Your Full Name"
                            name='name'
                            onChange={getdata}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            required
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name='email'
                            onChange={getdata}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            className="form-control mt-1"
                            placeholder="Password"
                            name='password'
                            onChange={getdata}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={addData}>
                            Submit
                        </button>
                    </div>
                    {/* <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p> */}
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default SignUp;