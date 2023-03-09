import React from "react";
import '../css/SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className="socialMedia-flex-container">
            <a href="https://www.facebook.com/PersonalChefRiri" target="_blank">
                <div className="facebook">
                    <i className="huge facebook square icon"></i>
                </div>
            </a>
            <a href="https://g.page/personalchefriri?share" target="_blank">
                <div className="marker">
                    <i className="huge map marker alternate icon"></i>
                </div>
            </a>
            <a href="https://www.instagram.com/homecookingsolutions/" target="_blank">
                <div className="instagram">
                    <i className="huge instagram icon"></i>
                </div>
            </a>
            
        </div>
    )
}

export default SocialMedia