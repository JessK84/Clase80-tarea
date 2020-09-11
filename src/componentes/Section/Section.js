import React from 'react'; // va siempre acá
import './Section.scss';

const Section = () => {
    return (
        <section className='contenedor' >
            <div className="texto">
                <h1 id="inicio" >Sobre React!</h1>
                <p id="sobre-react">React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes.</p>
                <p>React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.</p>
                <p>Según el servicio de análisis Javascript (en inglés "javascript analytics service"), Libscore, React actualmente está siendo utilizado en las páginas principales de Imgur, Bleacher Informe, Feedly, Airbnb, SeatGeek, HelloSign, y otras.</p>
            </div>
            <figure className="imagen">
                <img className="react" src="https://miro.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png"></img>
            </figure>      
        </section>       
    )
}

export default Section; 