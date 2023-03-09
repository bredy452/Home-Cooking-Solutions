// import React, {useState, useEffect} from "react";
import {PicList} from '../components/PicList'
import '../css/Menu.css'

const Menu = () => {
    // const [placeHolderImg, setPlaceHolderImg] = useState([])

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         const res = await fetch('https://api.unsplash.com/search/photos?query=cars', {
    //         method: 'GET',    
    //         headers: {
    //             Authorization: 'Client-ID tjl0LhjcBrK21CMV5yB2Q-aU756qo7iYDvtckISog7Y'
    //         }
    //         }).then(res => res.json())
    //         .then(data => setPlaceHolderImg(data.results))
    //     }
    //     fetchImages()
    // }, [])
    
    const renderedPics = PicList.map(pic => {
        return (
            
                <div key={pic.img} className='pics'>
                    <img className="ui fluid image" src={pic.img} alt={pic.description}/>
                </div>
            
        )
    })
    return (
        <>
            <div className="ui segment menu">
                <h1>Sample Menu</h1>
            </div>
            <div className='pic-div'>
                {renderedPics}
            </div>
            <div className="ui segment explanation">
                <p>
                    These are just examples<br/>
                    Personal Chef Riri will find the right dishes for you<br/>
                    with a Free Consultation<br/>
                    Please feel free to contact Personal Chef Riri!<br/>
                    You can also see pictures of her dishes on instagram
                </p>
            </div><br/> 
        </>     
    )
}

export default Menu