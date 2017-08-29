import React from 'react';

export default class FoodItem extends React.Component {
  render() {
    return (
      <div className="card " style={{ width: '15rem' }}>
        <img className="card-img-top" src={this.props.src} alt={this.props.name} />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <div className="card-footer">
            <a href="#" className="btn btn-primary" onClick={() => this.props.onAddToOrder(this.props.id)}>Add to order</a>
          </div>

        </div>
      </div>
    )
  }
}