import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import InfoUpdate from './InfoUpdate'
import Form from './Form'
import SocialMedia from './SocialMedia'
import Navigation from './Navigation'
import Footer from './Footer'
import Chef from './Chef'
import Menu from './Menu'

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
]

const years = [2022, 2023]



const App = () => {
    return (
        <>
            <Navigation/>
            <Banner/>
            <InfoUpdate/>
            <Categories/>
            <Form months={months} days={days} years={years}/>
            {/* <Chef/> */}
            {/* <Menu/> */}
            <SocialMedia/>
            <Footer/>
            
        </>
    )
}

export default App