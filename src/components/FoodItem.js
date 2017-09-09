import React from 'react';

export default class FoodItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }
    this.decrementQty = this.decrementQty.bind(this);
    this.incrementQty = this.incrementQty.bind(this);
  }

  decrementQty() {
    this.setState(prevState => ({
      quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0
    }))
  }

  incrementQty() {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
  }

  render() {
    return (
      <div className="row food-item my-5 my-md-3 pb-3 align-items-center">
        <div className="col-12 col-md-4">
          <img className="img-fluid rounded" src={this.props.src} alt={this.props.name} />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <h5>{this.props.name}</h5>
          <p >{this.props.description}</p>
          <form>
            <div className="input-group" style={{ width: "100px", height: "20px" }}>
              <span className="input-group-addon" onClick={this.decrementQty}>-</span>
              <input type="text" className="form-control form-control-sm" value={this.state.quantity} readOnly />
              <span className="input-group-addon" onClick={this.incrementQty}>+</span>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-2 my-3">
          <div className="row">
            <span className="col-12 text-muted text-md-right mb-3">Rs. {this.props.price}</span>
          </div>
          <div className="row">
            <button className="col-12 btn btn-primary" onClick={() => this.props.onAddToOrder(this.props.id, this.state.quantity)}>Add to order</button>
          </div>
        </div>
      </div>
    )
  }
}