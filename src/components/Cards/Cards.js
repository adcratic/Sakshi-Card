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
                path='/'
                id="image1"
              />
              <CardItem
                src='images/img1.jpg'
                text='Personalized Logo'
                label='Logo'
                path='/'
              />
              
              
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='images/allcards/folderDesign.jpg'
                text='Custom Folder designs'
                label='Folder'
                path='/'
                id="image2"
              />
            <CardItem
                src='images/img1.jpg'
                text='Modern Wedding card design'
                label='Wedding'
                path='/'
              />
              <CardItem
                src='images/img1.jpg'
                text='Letter heads'
                label='Letter'
                path='/'
              />
              
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img1.jpg'
                text='Check out Wedding card design'
                label='Premium'
                path='/'
              />
              <CardItem
                src='images/img1.jpg'
                text='Check out Wedding card design'
                label='Premium'
                path='/'
              />
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}



export default Cards;
