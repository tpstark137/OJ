import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   const handleClick=()=>{
      const data={
        email,
        password
      }
      console.log(data)
      toast.success('User Logged in Successfully', {
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
            <h1 className="text-white">Login</h1>
            <div class="row">
              <div class="col-sm-8">
                <div class="card">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        class="form-control"
                        name="email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        class="form-control"
                        name="password"
                      />
                      <br />
                    </div>
                    <button onClick={handleClick} class="btn btn-dark mb-3">
                      Login
                    </button>
                  
                  
                  <div className="create_accountinfo">
                  <p>New to CodingPanda.io ?</p>
                   <NavLink to='/register' ><button className="mb-3">Create your Account</button></NavLink>
                    </div>
                    </div>
                    </div>
                
              </div>
      
              <div class="col-sm-4"></div>
            </div>
          </div>
      
    )



}
export default Login