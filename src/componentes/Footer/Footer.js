import React from 'react'; // va siempre acá
import './Footer.scss';

const Footer = () => {
    return (
        <footer >
            <ul>
                <li id="comunidad-react"><a href="#inicio">Comunidad React!</a></li>
            </ul>
            <div className='iconos-redes'>
                <i id="git-hub" class="fab fa-github"></i>
                <i id="instagram" class="fab fa-instagram"></i>
                <i id="twitter" class="fab fa-twitter"></i>
                <i id="whatsapp" class="fab fa-whatsapp"></i>
            </div>
        </footer>       
    )
}

export default Footer; 