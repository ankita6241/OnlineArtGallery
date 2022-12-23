import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
const SignIn=()=> {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("user_add");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('Email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter valid email address', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('Invalid User', {
                        position: "top-center",
                    });
                } else {
                    toast.success('User login successfully ', {
                        position: "top-center",
                    });

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/Home")
                }
            }
        }

    }
    return (
        <div className="Auth-form-container">
            <form role="form" onsubmit="signIn(event);" autocomplete="off" className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                           input="email"
                           required
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name='email'
                            onChange={getdata}

                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            id="pwd"
                            required
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name='password'
                            onChange={getdata}
                        />
                    </div>
                    
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={addData}>
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Not Yet Register? <span><NavLink to="/SignUp">SignUp</NavLink></span>
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
    }
export default SignIn;