import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
                <HeroH1>O melhor Restaurante Da Região</HeroH1>
                <HeroP>Pronto em até 30 minutos</HeroP>
                <HeroBtn>Peça Já</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero;