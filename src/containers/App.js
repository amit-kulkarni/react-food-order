import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuDisplay from './MenuDisplay';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header orderCount={this.props.order.length} />
        <main>
          <MenuDisplay />
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