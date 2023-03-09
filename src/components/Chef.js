import React from "react";
import Navigation from "./Navigation";
import '../css/Chef.css'
import transparentLogo from '../assets/transparent_logo.webp'
import chefRiri from '../assets/chefRiri.webp'

const Chef = () => {
    return (
        <div className="chef-flex-container">
            <img className="ui small image transparent-logo" src={transparentLogo}/>
            <div className="ui segment details">
                <div className="ui grid">
                    <div className="five wide column left">
                        <div className="ui medium circular image chefRiri">
                            <img src={chefRiri}/>
                        </div>
                    </div>
                    <div className="eleven wide column right">
                        <h2 className="chefName">Ririka Evans<br/>
                            <span className="title">Chef/Owner</span>
                        </h2>
                        <p className="description-paragraph">
                            Ririka Evans, your neighborhood Personal Chef in Frederick, MD. I work within a 20 mile radius. I'm a Japanese mother of two so I can cook real home style dishes. I'm married to a wonderful American husband and have been living in the US for nine years, so I know Americans' tastes. I'm here to help people enjoy healthy home-cooked food. I have been a Chef for over eleven years at commercial kitchens across Japan and the US. I've worked at Japanese restaurants, Delis, Sandwich shops, American restaurants, and Whiskey Creek Golf Course. I am really skilled at making party menus because I've had experience making meals at a large number of  Golfing events, Weddings, Rehearsal dinners, Bridal showers, Baby showers, Birthday parties, Holiday parties, Sushi making classes etc.. My background is very unique, so I can make the perfect dish for you!
                        </p>
                        <p className="description-paragraph">
                            Home Cooking Solutions Personal Chef Services is insured
                        </p>
                        <p className="description-paragraph">
                            <span className="certification">Certification</span>&nbsp;&nbsp;:<br/>
                            Cooking & Catering Diploma<br/>
                            ServSafe Food Protection Manager<br/>
                            ServSafe Food Handler<br/>
                            Heartsaver First Aid<br/>
                            BLS Provider (CPR and AED)
                        </p>

                       
                    </div> 
                </div>
            </div>
            {/* <button className="ui button home">
                Home
                <i className="angle right icon"></i>
            </button> <br/><br/>  */}
            <button className="ui right labeled icon button home">
                <i className="angle right icon home"></i>
                Home
            </button><br/>
        </div>
    )
}

export default Chef