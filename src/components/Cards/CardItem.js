import React from 'react';
import { Link } from 'react-router-dom';
// import "./CardModal"

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Card Designs'
              src={props.src}
              id={props.id}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>

      {/* Image Modal */}
      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" alt="modal" id="img01"/>
        <div id="caption"></div>
      </div>
    </>
  );
}
 

export default CardItem;
