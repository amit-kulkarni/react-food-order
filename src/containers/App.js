import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import Search from '../components/Search';
import { addToOrder } from '../actions/OrderAction';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    }
  }

  handleFilter(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  getFilteredMenu() {
    return this.props.menu.filter((item) => {
      return item.name.indexOf(this.state.filterText) > -1
    })
  }

  render() {
    return (
      <div className="App">
        <Header orderCount={this.props.order.length} />
        <Search onFilterFood={(filterText) => this.handleFilter(filterText)} />
        <FoodList menu={this.getFilteredMenu()} onAddToOrder={(orderId) => this.props.addToOrder(orderId)} />
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