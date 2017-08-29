import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import './App.css';

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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu,
      order: []
    }
  }

  handleAddToOrder(orderId) {
    this.setState({
      order:[
        ...this.state.order,
        orderId
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Header orderCount= {this.state.order.length}/>
        <div className="input-group margin-bottom-sm">
          <input className="form-control" type="text" placeholder="Email address" />
          <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
        <FoodList menu={this.state.menu} onAddToOrder={(orderId) => this.handleAddToOrder(orderId)}/>
        <Footer />
      </div>

    );
  }
}

export default App;
