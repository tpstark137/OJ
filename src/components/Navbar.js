import React from 'react'
import './style.css'


function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>
                        <span className='logo'>Coding</span>Panda.io
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/problemList">Problems List</a>
                            </li>
                            <div>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            </div>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    )
}
export default Navbar;