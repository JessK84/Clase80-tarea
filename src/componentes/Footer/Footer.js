import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const [displayThird, setDisplay] = useState(false);
    
    return (
        <footer >
            <div className="footer-social-media">
                <button type="button" onClick={() => setDisplay(!displayThird)}
                    className="footer-button" >Comunidad
                </button>
                {
                     displayThird  === true ? 
                <div className='iconos-redes'>
                    <i id="git-hub" class="fab fa-github"></i>
                    <i id="instagram" class="fab fa-instagram"></i>
                    <i id="twitter" class="fab fa-twitter"></i>
                    <i id="whatsapp" class="fab fa-whatsapp"></i>
                </div>
                : 
                <h5></h5>
                } 
            </div>
        </footer>       
    )
}

export default Footer; 