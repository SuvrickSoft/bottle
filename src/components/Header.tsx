import React from "react"

export const Header: React.FC = () => {
    
    return (
        <>
            <header>
            <nav className="">
                <div className="container nav-wrapper">
                <a href="#1" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                </div>
            </nav>
        
            </header>
        </>
    )
}


