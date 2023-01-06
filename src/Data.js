// background image imports
import homeImg1 from './images/HomeImage1.png';
import homeImg2 from './images/HomeImage2.png';
import homeImg3 from './images/HomeImage3.png';
// regular dishes images import
import dish1 from './images/Jollof-Rice.jpg';
import dish2 from './images/Fried Rice.jpg';
import dish3 from './images/rice.jpg';
import dish4 from './images/beans.jpg';
import dish5 from './images/Fried-plantains.jpg';
// Swallow images import
import menu1 from './images/Amala.jpg';
import menu2 from './images/semo.jpeg';
import menu3 from './images/fufu.jpg';
import menu4 from './images/Eba.jpg';
// Soup images import
import soup1 from './images/vegetable soup.jpeg';
import soup2 from './images/Egusi-Soup.jpg';
import soup3 from './images/Ewedu-Soup.jpg';
import soup4 from './images/Gbegiri Soup.jpeg';
import soup5 from './images/Okra Soup.jpg';
// Protein images import
import protein1 from './images/Assorted meat.jpg';
import protein2 from './images/Beef meat.jpg';
import protein3 from './images/Boiled EGG.jpg';
import protein4 from './images/Ponmo.jpg';
import protein5 from './images/smoked-catfish.png';

// homepage data
export const homeImages = [
  {
    image: homeImg2,
    title: 'Assorted meat',
  },
  {
    image: homeImg3,
    title: 'Egusi Soup',
  },
  {
    image: homeImg1,
    title: 'Fried Rice',
  },
];

// regular dishes page data
export const regularData = [
  {
    image: dish1,
    title: 'Jollof Rice',
    price: 100,
    id: 1,
    newPrice: 100,
  },
  {
    image: dish2,
    title: 'Fried Rice',
    price: 100,
    newPrice: 100,
    id: 2,
  },
  {
    image: dish3,
    title: 'White Rice',
    price: 100,
    newPrice: 100,
    id: 3,
  },
  {
    image: dish4,
    title: 'Beans',
    price: 100,
    newPrice: 100,
    id: 4,
  },
  {
    image: dish5,
    title: 'Fried Plantain',
    price: 100,
    newPrice: 100,
    id: 5,
  },
];

// Swallow page data
export const swallowData = [
  {
    image: menu1,
    title: 'Amala',
    price: 200,
    newPrice: 200,
    id: 5,
  },
  {
    image: menu2,
    title: 'semo',
    price: 200,
    newPrice: 200,
    id: 6,
  },
  {
    image: menu3,
    title: 'fufu',
    price: 200,
    newPrice: 200,
    id: 7,
  },
  {
    image: menu4,
    title: 'Eba',
    price: 200,
    newPrice: 200,
    id: 23,
  },
  {
    image: soup1,
    title: 'vegetable soup',
    price: 0,
    newPrice: 0,
    id: 18,
  },
  {
    image: soup2,
    title: 'Egusi-Soup',
    price: 0,
    newPrice: 0,
    id: 19,
  },
  {
    image: soup3,
    title: 'Ewedu-Soup',
    price: 0,
    newPrice: 0,
    id: 20,
  },
  {
    image: soup4,
    title: 'Gbegiri Soup',
    price: 0,
    newPrice: 0,
    id: 21,
  },
  {
    image: soup5,
    title: 'Okra Soup',
    price: 0,
    newPrice: 0,
    id: 22,
  },
];

// Soup page data
export const soupData = [
  {
    image: soup1,
    title: 'vegetable soup',
    price: 200,
    newPrice: 200,
    id: 8,
  },
  {
    image: soup2,
    title: 'Egusi-Soup',
    price: 200,
    newPrice: 200,
    id: 9,
  },
  {
    image: soup3,
    title: 'Ewedu-Soup',
    price: 200,
    newPrice: 200,
    id: 10,
  },
  {
    image: soup4,
    title: 'Gbegiri Soup',
    price: 200,
    newPrice: 200,
    id: 11,
  },
  {
    image: soup5,
    title: 'Okra Soup',
    price: 200,
    newPrice: 200,
    id: 12,
  },
];

// Protein page data
export const proteinData = [
  {
    image: protein1,
    title: 'Assorted meat',
    price: 200,
    newPrice: 200,
    id: 13,
  },
  {
    image: protein2,
    title: 'Beef',
    price: 150,
    newPrice: 150,
    id: 14,
  },
  {
    image: protein3,
    title: 'Boiled EGG',
    price: 100,
    newPrice: 100,
    id: 15,
  },
  {
    image: protein4,
    title: 'Ponmo',
    price: 100,
    newPrice: 100,
    id: 16,
  },
  {
    image: protein5,
    title: 'Smoked-catfish',
    price: 1200,
    newPrice: 1200,
    id: 17,
  },
];

// review page data
// export const reviewData = [
//   {
//     image: review1,
//     name: 'john doe',
//   },
//   {
//     image: review2,
//     name: 'juliet smith',
//   },
//   {
//     image: review3,
//     name: 'allan smith',
//   },
//   {
//     image: menu4,
//     name: 'jack taylor',
//   },
// ];

// all data that can be carted
export const data = [regularData, swallowData];
