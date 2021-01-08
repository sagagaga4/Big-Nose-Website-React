import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        
        <li className="cards_item">
            <Link className="cards_item_link" to={props.path}>
                <figure className='cards_item_pic-wrap' data-category={props.label}>
                    <img src='/' alt="Album Image"
                        className="cards_item_img" />
                        </figure>
                        <div className='cards_item_info'>
                            <h5 className="cards_item_text"/>
                        </div>
                        </Link>
                        </li>
    );
}

export default CardsItem;
