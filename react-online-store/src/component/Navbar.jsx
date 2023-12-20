import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3" style={{color: "white"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4" to="/home"  style={{color: "white"}}>
                    <img src="/assets/logo.png" width={65}></img> Best Shop
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home" style={{color: "white"}}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color: "white"}}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color: "white"}}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color: "white"}}>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/register" className="btn ms-2"  style={{color: "white"}}>
                                Register</NavLink>

                            <NavLink to="/login" className="btn ms-2"  style={{color: "white"}}>
                                SignIn</NavLink>
                            <NavLink to="/cart" className="btn ms-2"  style={{color: "white"}}>
                                <i className="fa fa-shopping-cart me-1 "></i> ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}
