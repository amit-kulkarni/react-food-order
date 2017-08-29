import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import { addToOrder } from '../actions/OrderAction';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header orderCount={this.props.order.length} />
        <div className="input-group margin-bottom-sm">
          <input className="form-control" type="text" placeholder="Food Item" />
          <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
        <FoodList menu={this.props.menu} onAddToOrder={(orderId) => this.props.addToOrder(orderId)} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    menu: state.menu,
    order: state.order
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    addToOrder: (id) => {
      dispatch(addToOrder(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);