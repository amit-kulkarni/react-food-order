import React from 'react';
import FoodItem from './FoodItem';

export default class FoodList extends React.Component {
  render() {
    return (
      <div className="card-deck">
        {
          this.props.menu.map((item) => {
            return (
              <FoodItem key={item.id} {...item} onAddToOrder={() => this.props.onAddToOrder(item.id)}/>
            );
          })
        }
      </div>
    );
  }
}