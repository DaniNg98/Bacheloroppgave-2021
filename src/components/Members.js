import React from 'react';
import MemberItem from './MemberItem';
import './Members.css';
import mem1 from '../images/mem1.png';
import mem2 from '../images/mem2.png';
import mem3 from '../images/mem3.png';
import mem4 from '../images/mem4.png';

function Members() {
  return (
    <div className='members' id='Members'>
      <h1>Alle medlemmene</h1>
      <div className='members__container'>
        <div className='members__wrapper'>
          <ul className='members__items'>
            <MemberItem src={mem1} text='Daniel Nguyen' />
            <MemberItem src={mem2} text='Asso Rostampoor' />
            <MemberItem src={mem3} text='Soukaina Salam Qzaibri' />
            <MemberItem src={mem4} text='Athisaiyan Suresh' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Members;
