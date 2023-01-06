import {
  faBars,
  faTimes,
  faHeart,
  faSearch,
  faShoppingCart,
  faUtensils,
  faDrumstickBite,
  faBowlFood,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/foodLogo.png';

const Header = ({ countCartItem }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scroll, setScroll] = useState(1);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.pageYOffset;
      setScroll(scrollCheck);
    };
    document.addEventListener('scroll', onScroll);
    if (showMenu) {
      toggleMenu();
    }
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <>
      <header>
        <a href='#' className='header_logo'>
          <img src={logo} alt='logo' />
        </a>

        <nav className={showMenu ? 'header_navbar active' : 'header_navbar'}>
          <Link to='home' activeClass='active' offset={-45} spy={true}>
            <FontAwesomeIcon icon={faHouse} /> home
          </Link>
          <Link to='dishes' activeClass='active' offset={-45} spy={true}>
            <FontAwesomeIcon icon={faUtensils} /> Regular Dishes
          </Link>
          <Link to='swallow' activeClass='active' offset={-45} spy={true}>
            <FontAwesomeIcon icon={faBowlFood} /> Swallow
          </Link>
          <Link to='protein' activeClass='active' offset={-45} spy={true}>
            <FontAwesomeIcon icon={faDrumstickBite} /> Protein
          </Link>
        </nav>

        <div className='header_icons'>
          <FontAwesomeIcon
            icon={showMenu ? faTimes : faBars}
            id='menu_bar'
            onClick={toggleMenu}
          />
          {/* <FontAwesomeIcon icon={faSearch} onClick={toggleSearch} />
          <a href='#'>
            <FontAwesomeIcon icon={faHeart} />
          </a> */}

          <Link to='cart' offset={-45} spy={true} className='cart-icon'>
            <FontAwesomeIcon icon={faShoppingCart} />
            {countCartItem ? (
              <div className='cart-items'> {countCartItem} </div>
            ) : (
              ''
            )}
          </Link>
        </div>
      </header>
      <form
        action=''
        className={showSearch ? 'search-form active' : 'search-form'}
      >
        <input
          type='search'
          name=''
          id='search-box'
          placeholder='search here...'
        />
        <label htmlFor='search-box'>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <FontAwesomeIcon icon={faTimes} id='close' onClick={toggleSearch} />
      </form>
    </>
  );
};

export default Header;
