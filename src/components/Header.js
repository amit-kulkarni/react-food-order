import React from 'react';

export default function Header(props) {
  return (
    <div className="container header">
      <div className="row align-items-center py-3">
        <div className="col-md-10">
          <h3>
            <i className="fa fa-cutlery mr-3" aria-hidden="true"></i>
            <span>Order Food</span>
          </h3>
        </div>
        <div className="col-md-2">
          <i className="fa fa-shopping-cart mr-1"></i>
          <span style={{ fontSize: "0.75rem" }}>{props.orderCount}</span>
      </div>
    </div>
    </div >
  );
}