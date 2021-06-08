import React from 'react';

function MemberItem(props) {
  return (
    <>
      <li className='members__item'>
        <a className='members__item__link'>
          <figure className='members__item__pic-wrap'>
            <img
              src={props.src}
              alt='Document Image'
              className='members__item__img'
            />
          </figure>
          <div className='members__item__info'>
            <h5 className='members__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default MemberItem;
