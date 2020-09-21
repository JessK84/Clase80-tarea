import React from 'react';
import './App.scss';
import Header from './componentes/Header/Hedaer';
import Section from './componentes/Section/Section';
import Footer from './componentes/Footer/Footer';
import Nav from './componentes/Nav/Nav';

const App =() => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Section />
        <Nav />
      </div>
      <Footer />   
     </div>
  );
}
export default App;
