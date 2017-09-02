import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="input-group margin-bottom-sm my-3">
          <input className="form-control" type="text" placeholder="Food Item" onChange={(e) => this.props.onFilterFood(e.target.value)} />
          <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
}