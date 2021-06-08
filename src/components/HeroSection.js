import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <div className='hero-container' id='HeroSection'>
      <h1>Velkommen til vår bachelorside</h1>
      <p>Du finner dokumentene lenger ned på siden</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link to='Documents' smooth={true} className='Hero-button-Doc'>
            Gå til dokumentene
          </Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          <Link to='Members' smooth={true} className='Hero-button-Mem'>
            Gå til medlemmene
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
