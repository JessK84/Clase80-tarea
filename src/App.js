import React from 'react';
import './App.scss';
import Header from './componentes/Header/Hedaer';
import Section from './componentes/Section/Section';
import Footer from './componentes/Footer/Footer';

const App =() => {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />    
     </div>
  );
}
export default App;
