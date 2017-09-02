import React from 'react';

export default class FoodItem extends React.Component {
  render() {
    return (
      <div className="row my-5 my-md-3 align-items-center">
        <div className="col-12 col-md-4">
          <img className="img-fluid rounded" src={this.props.src} alt={this.props.name} />
        </div>
        <div className="col-12 col-md-6 mt-3 mt-md-0">
          <h5>{this.props.name}</h5>
          <p >{this.props.description}</p>
        </div>
        <div className="col-12 col-md-2 mb-md-2">
          <a href="#" className="btn btn-primary " onClick={() => this.props.onAddToOrder(this.props.id)}>Add to order</a>
        </div>
      </div>

    )
  }
}