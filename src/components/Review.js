import {
  faQuoteRight,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Review = ({ people }) => {
  return (
    <section className='review' id='reviews'>
      <h3 className='sub-heading'>customer's review</h3>
      <h1 className='heading'>what they say</h1>

      <div className='review_slider'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          navigation={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          className='wrapper'
        >
          {people.map((person, index) => {
            return (
              <SwiperSlide key={index} className='slide'>
                <FontAwesomeIcon icon={faQuoteRight} />
                <div className='user'>
                  <img src={person.image} alt='' />
                  <div className='user_info'>
                    <h3>{person.name}</h3>
                    <div className='stars'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  modi architecto minus accusantium odit, quod optio possimus
                  eius ab suscipit!
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
