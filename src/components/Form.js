import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import '../css/Form.css'

//service_tyxbs16

const Form = ({months, days, years}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [occasion, setOccasion] = useState('')
    const [numberOfPeople, setNumberOfPeople] = useState('')
    const [details, setDetails] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDays] = useState('')
    const [year, setYears] = useState('')

    const renderedMonths = months.map(month => {
        return (
            <option key={month}>{month}</option>
        )
    })

    const renderedDays = days.map(day => {
        return (
            <option key={day}>{day}</option>
        )
    })

    const renderedYears = years.map(year => {
        return (
            <option key={year}>{year}</option>
        )
    })

    const form = useRef()

    const sendEmail =(e) => {
        e.preventDefault()
        
        emailjs.sendForm('service_tyxbs16', 'template_7ib8c1p', form.current, 'kbYtX3Q0FaiOOJkeA')
        .then((result) => console.log(result.text),
        (error) => {
            console.log(error.text)
        })
    }

    return (
        <div className="form-outside">
        <form ref={form} className="ui form flex" onSubmit={sendEmail}>
            <div className="header">Inquiry Form</div>
            <br/><br/>
            <div className=" required field">
                <label>First Name</label>
                <input 
                    type='text'
                    name="firstName" 
                    value={firstName} 
                    placeholder='First Name' 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
            </div>
            <div className=" required field">
                <label>Last Name</label>
                <input 
                    type='text'
                    name="lastName"  
                    value={lastName} 
                    placeholder='Last Name' 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setLastName(e.target.value)}
                >
                </input>
            </div>
            <div className="required field">
                <label>Email</label>
                <input 
                    type='email'
                    name="email"  
                    value={email} 
                    placeholder="Email" 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
            </div>
            <div className="required field">
                <label>Phone</label>
                <input 
                    type='text'
                    name='phoneNumber' 
                    value={phoneNumber} 
                    placeholder='(xxx) xxx-xxxx' 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                >
                </input>
            </div>
            <div className=" required field">
                <label>Address</label>
                <input 
                    type='text'
                    name='address' 
                    value={address} 
                    placeholder='Address' 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </input>
            </div>
            <div className="required field">
                <label>City</label>
                <input 
                    type='text'
                    name='city' 
                    value={city} 
                    placeholder="City" 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setCity(e.target.value)}
                >
                </input>
            </div>
            <div className="required field">
                <label>Occasion</label>
                <input 
                    type='text'
                    name='occasion' 
                    value={occasion} 
                    placeholder="Occasion" 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                </input>
            </div>
            <div className="required field">
                <label>Number of People</label>
                <input 
                    type='text'
                    name='numberOfPeople' 
                    value={numberOfPeople} 
                    placeholder="Up to 20 people" 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                >
                </input>
            </div>
            <div className='required field'>
                <label>Date Requested</label>
            </div>
            <div className=" inline fields">
                <div className="field-one">
                    <select className='ui fluid dropdown' name='month'style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}} onChange={(e) => setMonth(e.target.value)}>
                        {renderedMonths}
                    </select>
                </div>
                <div className="field-one">
                    <select className='ui fluid dropdown' name='day' style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}} onChange={(e) => setDays(e.target.value)}>
                        {renderedDays}
                    </select>
                </div>
                <div className="field-one">
                    <select className='ui fluid dropdown' name='year' style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}} onChange={(e) => setYears(e.target.value)}>
                        {renderedYears}
                    </select>
                </div>
            </div>
            <div className="required field">
                <label>Details</label>
                <textarea
                    name='details' 
                    value={details} 
                    placeholder='More information about the event' 
                    style={{backgroundColor: 'rgb(255, 222, 95, 0.75)'}}
                    onChange={(e) => setDetails(e.target.value)}
                >
                </textarea>
            </div><br/>
            <button className="ui button">Submit</button><br/>
            <br/>
        </form>
        </div>
    )
}

export default Form