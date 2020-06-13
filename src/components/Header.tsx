import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import M from 'materialize-css'

export const Header: React.FC = () => {

    useEffect(() => {
        var elem = document.querySelector(".sidenav") as Element;
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    })


    return (
        <>
            <header>
                <nav className="purple darken-4">
                    <div className="container nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <a href="#0" data-target="mobile-demo" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <NavLink to="/" >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" >About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="sidenav" id="mobile-demo">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul >
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >About</NavLink>
                        </li>
                    </ul>
                </div>

            </header>
        </>
    )
}


