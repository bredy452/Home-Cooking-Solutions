import React from "react";
import '../css/Navigation.css'

const Navigation = () => {
    return (
        <div className="ui four item huge menu">
            <button className="ui button navigation">
                Home
            </button>
            <button className=" ui button navigation">
                Chef
            </button>
            <button className="ui button navigation">
                Menu
            </button>
            <button className="ui button navigation">
                Contact
            </button>
        </div>
    )
}

export default Navigation