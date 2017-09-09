import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header orderCount={this.props.order.length} />
        <main className="container">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps)(App);