import React from 'react';

function DocumentItem(props) {
  return (
    <>
      <li className='documents__item'>
        <a className='documents__item__link' href={props.link} target='_blank'>
          <figure className='documents__item__pic-wrap'>
            <img
              src={props.src}
              alt='Document Image'
              className='documents__item__img'
            />
          </figure>
          <div className='documents__item__info'>
            <h5 className='documents__item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default DocumentItem;
