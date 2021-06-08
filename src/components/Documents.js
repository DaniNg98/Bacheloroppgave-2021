import React from 'react';
import DocumentItem from './DocumentItem';
import './Documents.css';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import pdf1 from '../files/Statusrapport.pdf';
import pdf2 from '../files/Prosjektskisse.pdf';
import pdf3 from '../files/Forprosjekt.pdf';
import pdf4 from '../files/sluttrapport.pdf';

function Documents() {
  return (
    <div className='documents' id='Documents'>
      <h1>Alle dokumentene</h1>
      <div className='documents__container'>
        <div className='documents__wrapper'>
          <ul className='documents__items'>
            <DocumentItem
              src={img1}
              text='Gå til statusrapporten'
              link={pdf1}
            />
            <DocumentItem src={img2} text='Gå til projektskissen' link={pdf2} />
            <DocumentItem src={img3} text='Gå til forprosjektet' link={pdf3} />
            <DocumentItem src={img4} text='Gå til Sluttrapporten' link={pdf4} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Documents;
