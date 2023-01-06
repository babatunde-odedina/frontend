import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingCart,
  faHeart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Regular = ({ dishes, onAdd }) => {
  return (
    <section className='menu' id='dishes'>
      <h3 className='sub-heading'>Our Dishes</h3>
      <h1 className='heading'>Regular Dishes</h1>

      <div className='box-container'>
        {dishes.map((dish) => {
          return (
            <div className='box' key={dish.id}>
              <div className='image'>
                <img src={dish.image} alt='' />
              </div>
              <div className='content'>
                <h3>{dish.title}</h3>

                <Link to='/' onClick={(e) => e.preventDefault()}>
                  <div onClick={() => onAdd(dish)} className='btn'>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </div>
                </Link>
                <span className='price'>&#8358;{dish.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Regular;
