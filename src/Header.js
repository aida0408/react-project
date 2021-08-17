import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNavBar from "./HeaderNavBar";


function Header(){
    return(
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <HeaderLogo />
                    <HeaderNavBar />
                </div>
            </div>
        </div>
    )
}

export default Header

