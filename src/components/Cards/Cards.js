import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
      <div className='cards' id="cards">
        <h1>Check out these Card Designs!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/allCards/businessCard.jpg'
                text='Choose one for your Business'
                label='Business'
                path='/categories'
                id="image1"
              />
              <CardItem
                src='images/allCards/logo_design.jpg'
                text='Personalized Logo'
                label='Logo'
                path='/categories'
              />
              
              
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='images/allCards/folderDesign.jpg'
                text='Custom Folder designs'
                label='Folder'
                path='/categories'
                id="image2"
              />
            <CardItem
                src='images/allCards/flyer_design.jpg'
                text='Flyer design'
                label='Flyer'
                path='/categories'
              />
              <CardItem
                src='images/allCards/poster_design.jpg'
                text='Best Poster designs'
                label='Poster'
                path='/categories'
              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/allCards/letter_heads.jpg'
                text='Business Letter Heads'
                label='Letter Heads'
                path='/categories'
              />
              <CardItem
                src='images/allCards/wedding_card.jpg'
                text='Check out Wedding card design'
                label='Wedding Cards'
                path='/categories'
              />
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}



export default Cards;