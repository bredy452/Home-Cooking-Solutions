import React from "react";
import '../css/Categories.css'

const Categories = () => {
    return (
        <div className="categories-flex-container">
            <div className='consultation'>
                <i className="big circular comments outline icon"></i>
                <h2 className="categoryNames">Free Consultation</h2>
                <h3>I talk with you to customize the menu before cooking day.</h3>
                <br/>
            </div>
            <div className='shopping'>
                <i className="big circular shopping cart icon"></i>
                <h2 className="categoryNames">Grocery Shopping</h2>
                <h3>I shop for the freshest ingredients.<br/>You keep the leftover product.</h3>
            </div>
            <div className='cooking'>
                <i className="big circular utensils icon"></i>
                <h2 className="categoryNames">Cooking</h2>
                <h3>I prepare tasty meals in your kitchen.</h3>
            </div>
            <div className='cleanUp'>
                <i className="big circular star outline icon"></i>
                <h2 className="categoryNames">Clean Up</h2>
                <h3>I clean up after my cooking.</h3>
            </div>
        </div>
    )
}

export default Categories