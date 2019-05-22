import { Component } from 'preact';
import { Router } from 'preact-router';

import './style/theme';
import './style/main';

import Home from './pages/home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class App extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Navbar />
        <div class="navPusher">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}

