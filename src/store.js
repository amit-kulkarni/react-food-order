import { createStore, applyMiddleware } from 'redux';
import foodOrderApp  from './reducers';
import logger from 'redux-logger';

const menu = [
  {
    id: 1,
    src: "http://lorempixel.com/400/200/food/1",
    name: 'Chili Paneer',
    description: 'Cottage Cheese stir fried with onions and bell peppers in a spicy sauce.',
    spiceRating: 3
  },
  {
    id: 8,
    src: "http://lorempixel.com/400/200/food/8",
    name: 'Vegetable Samosa',
    description: 'A special dough pastry stuffed with potatoes and peas with five spice flavors.',
    spiceRating: 3
  },
  {
    id: 3,
    src: "http://lorempixel.com/400/200/food/3",
    name: 'Kadai Matar Paneer',
    description: 'A national favorite curry containing cottage cheese and peas with blended spices.',
    spiceRating: 3
  },
  {
    id: 4,
    src: "http://lorempixel.com/400/200/food/4",
    name: 'Dal Tadka',
    description: 'Cooked yellow lentils infused with cumin seeds, aromatic spices, and cilantro garnishing.',
    spiceRating: 3
  },
  {
    id: 5,
    src: "http://lorempixel.com/400/200/food/5",
    name: 'Vegetable Pulao',
    description: 'Basmati rice prepared with garden fresh vegetables, cardamom, saffron, and cloves.',
    spiceRating: 3
  }
];
const order = [];

const initialState = {
  menu,
  order
}

const store = createStore(
  foodOrderApp,
  initialState,
  applyMiddleware(
    logger
  )
);
export default store;
