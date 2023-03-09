import React from 'react'
import banner from '../assets/Banner.webp'
import Logo from './Logo'
import '../css/App.css'


const Banner = () => {
    return (
        <div className='flex-container'>
            <img className='ui fluid image' src={banner}/>
            <Logo/>
        </div>
    )
}

export default Banner