import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

class OrderConfirm extends React.Component {

  render() {
    return (
      <div>
        <span>Confirm Order Page to be displayed</span>
        {
          this.props.order.map((order) => {
            return <div key={order.id}> Order Id is {order.id}  Quantity is {order.qty} </div>
          })
        }
        <button className="btn btn-primary" onClick={browserHistory.goBack} > Edit </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    order: state.order
  }
}

export default connect(mapStateToProps)(OrderConfirm);