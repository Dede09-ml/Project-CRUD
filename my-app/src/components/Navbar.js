import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>

            <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div class="container d-flex justify-content-center">
                    <div class="">
                        <div class="col-12 d-flex justify-content-center mb-3 p-2">
                            <a class="navbar-brand" href="#"
                            ><img
                                    id="student"
                                    src="assets/images/favicon.ico"
                                    alt="Student Logo"
                                    draggable="false"
                                    height="60"
                                /></a>
                        </div>
                        <div class="col-12 d-flex justify-content-center mb-3 p-2">
                            <h1>
                                Students Score
                            </h1>
                        </div>
                        <div class=" justify-content-center mb-3 ">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav align-items-center mx-auto">
                                    <li class="nav-item">
                                        <a class="nav-link mx-2" href="index.html"><i class="fa fa-home fa-fw"></i>&nbsp;Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-2" href="rules.html"><i class="fa fa-tasks fa-fw"></i>&nbsp;Scoring Rules</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link mx-2" href="contact.html"><i class="fa fa-user-circle" aria-hidden="true"></i>&nbsp;Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar