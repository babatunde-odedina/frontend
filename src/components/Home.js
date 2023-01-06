import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Link } from 'react-scroll';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = ({ slides }) => {
  return (
    <section className='home' id='home'>
      <div className='home_slider'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10500,
          }}
          loop={true}
          grabCursor={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          className='home_wrapper'
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index} className='home_slide'>
                <div className='home_slide_content'>
                  <span>Good Food Choices are good investments</span>
                  <h3>{slide.title}</h3>
                  <p>
                    Healthy eating is a way of living that helps you stay
                    healthy and strong inside and out. It promotes a balanced
                    diet, regular exercise and social interactions. Eating
                    healthy makes you feel good and keeps you healthy and
                    strong. Healthy eating also has many health benefits- it
                    prevents diseases, maintains bodily functions and
                    contributes to body weight control.
                  </p>
                  <Link to='dishes' className='btn' >
                    See Menu
                  </Link>
                </div>
                <div className='home_slide_image'>
                  <img src={slide.image} alt='' />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
