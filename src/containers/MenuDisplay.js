import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addToOrder } from '../actions/OrderAction';

import FoodList from '../components/FoodList';
import Search from '../components/Search';

class MenuDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    }
  }

  handleFilter(filterText) {
    this.setState({
      filterText: filterText
    })
  }

  render() {
    return (
      <div >
        <Search onFilterFood={(filterText) => this.handleFilter(filterText)} />
        <FoodList
          menu={this.props.menu}
          filterText={this.state.filterText}
          onAddToOrder={(orderId, qty) => this.props.addToOrder(orderId, qty)}
        />
        <div className="row">
          <div className="col-md-12">
            <Link to="/order-confirm" className="btn btn-secondary mb-3 mt-0 float-right">Next</Link>
          </div>
        </div>
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
    addToOrder: (id, qty) => {
      dispatch(addToOrder(id, qty));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDisplay);