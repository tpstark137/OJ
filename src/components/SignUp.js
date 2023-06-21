import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const handleClick = () => {
        const data = {
            name,
            email,
            password
        }
        console.log(data)
        toast.success('Account Registered Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className="container mt-5">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <h1 className="text-white">Account Registration</h1>

            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label >Set User Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="email"
                                className="form-control"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Set Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Set Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                name="password"
                            />
                            <br />
                        </div>
                        <button onClick={handleClick} className="btn btn-dark mb-3">
                            Register
                        </button>


                        <div className="create_accountinfo">
                            <p>Already Resistered ?</p>
                            <NavLink to='/login' ><button className="mb-3 btn btn-dark">Go to Login Page</button></NavLink>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )



}
export default Login