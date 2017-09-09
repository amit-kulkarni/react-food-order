import React from 'react';
import FoodItem from './FoodItem';

export default class FoodList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.menu
            .filter((item) => {
              return item.name.toUpperCase().indexOf(this.props.filterText.toUpperCase()) > -1
            })
            .map((item) => {
              return (
                <FoodItem key={item.id} {...item} onAddToOrder={(orderId, qty) => this.props.onAddToOrder(orderId, qty)} />
              );
            })
        }
      </div>
    );
  }
}