import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import '../components/Header.css'
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={Logo} alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="/service">Service</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  fw-bold" href='/tracking'>Tracking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fw-bold" href='/contact'>Contact</a>
                            </li>
                        </ul>
                        <a href="/contact" className="btn btn-danger fw-bold">Requote a Quote</a>
                    </div>
                </div>
            </nav >


        </>
    )
}

export default Header