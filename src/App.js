import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Funcionarios from './components/Funcionarios';
import { productData } from './components/Products/data';
import {funcionariosData} from './components/Funcionarios/data'
import {  Footer } from './components/Footer/index';


function App() {
  return (
    <Router>
      <GlobalStyle />
    <Hero />
    <Products heading="Escolha seu favorito" data={productData}/>
    <Funcionarios heading="conheça nossos funcionarios" data={funcionariosData}></Funcionarios>
    <Footer/>
    </Router>
    
   
  );
};

export default App;

