import React from 'react';
import AlbumCard from './AlbumCard';
import './Cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1>Fire Albums!</h1>
            <div className="cards_container">
                <div className='cards_wrapper'>
                    <ul className="cards_items">
                    </ul>
                        <CardsItem
                         src="images/50.jpg"
                         text="Big Nose - 50/50 (Album)"
                         path='/services'
                        ></CardsItem>
                        <CardsItem
                         src="images/messedup.jpg"
                         text="Big Nose - Messed Up (Album)"
                         path='/services'

                        ></CardsItem>
                        <CardsItem
                         src="images/bignose.jpg"
                         text="Big Nose - Big Nose (Album)"
                         path='/services'

                        ></CardsItem>
               </div>
            </div>
        </div>
    );
}