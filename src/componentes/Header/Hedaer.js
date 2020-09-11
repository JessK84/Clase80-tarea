import React from 'react'; // va siempre acá
import './Header.scss';

const Header = () => {
    return (
        <header  id="inicio">
            <nav>
                <a href="#sobre-react">Sobre React!</a>
                <a href="#comunidad-react">Comunidad React!</a>
            </nav>
            <h2 className='titulo'>Primera tarea React!</h2>
        </header>       
    )
}
export default Header; 