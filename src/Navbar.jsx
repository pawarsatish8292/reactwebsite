import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className='row'>
                    <div className="col-10 mx-Auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">EventIndians</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact activeclassName="menu_active" aria-current="page" to="/">home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeclassName="menu_active" to="/service">service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeclassName="menu_active" to="/about">about</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact activeclassName="menu_active" to="/contact">contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;