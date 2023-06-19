import React from 'react'


function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        CodingPanda.io
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/problemList">Problems List</a>
                            </li>
                            <div>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
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