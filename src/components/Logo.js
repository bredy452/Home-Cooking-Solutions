import React from "react";
import logo from '../assets/Logo.webp'

const Logo = () => {
    return (
        <div>
            <img className="ui medium image logo" src={logo}/>
            <h3 className="ui centered">Based in Frederick, Maryland</h3>
        </div>
    )
}
export default Logo