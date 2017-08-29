import React from 'react';

export default function Header(props) {
    return (
        <div className="App-header">
            <h2 className="clearfix">
                <i className="fa fa-cutlery fa-inverse" aria-hidden="true"></i>
                <span>Order Food</span>
                <i className="fa fa-shopping-cart fa-inverse pull-right"></i><span className="mybadge">{props.orderCount}</span>
            </h2>
        </div>
    );
}