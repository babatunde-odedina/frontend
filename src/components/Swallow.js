import {
  faHeart,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Swallow = ({ items, onAdd }) => {
  return (
    <section className='menu' id='swallow'>
      <h3 className='sub-heading'>Our Swallow</h3>
      <h1 className='heading'>Swallow Dishes</h1>

      <div className='box-container'>
        {items.map((item) => {
          return (
            <div className='box' key={item.id}>
              <div className='image'>
                <img src={item.image} alt='' />
              </div>
              <div className='content'>
                <h3>{item.title}</h3>

                <Link to='/' onClick={(e) => e.preventDefault()}>
                  <div onClick={() => onAdd(item)} className='btn'>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </div>
                </Link>
                <span className='price'>&#8358;{item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Swallow;
