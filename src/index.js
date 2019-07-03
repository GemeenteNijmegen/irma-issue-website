import { Component } from 'preact';
import { Router } from 'preact-router';

import './style/theme';
import './style/main';

import Home from './pages/home';
import DigidIssue from './pages/digidIssue';
import ReIssue from './pages/reIssue';
import FAQ from './pages/faq';
import About from './pages/about';
import Error from './pages/error';
import Disclose from './pages/disclose';
import NotFound from './pages/notfound';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

require('@privacybydesign/irmajs/dist/irma');

export default class App extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  renderRouter() {
    if(typeof window.irmaErrorString === 'string' && window.irmaErrorString !== '')
      return <Error />

    return (
      <Router onChange={this.handleRoute}>
        <Home path="/irma/gemeente/start.html" />
        <DigidIssue path="/irma/gemeente/issue" />
        <DigidIssue path="/irma/gemeente/issue-manual" />

        <Disclose path="/irma/gemeente/re-issue" />
        <ReIssue path="/irma/gemeente/re-issue-final" />

        <FAQ path="/irma/gemeente/faq" />
        <About path="/irma/gemeente/over" />

        <NotFound default />
      </Router>
    );
  }

  render() {
    return (
      <div id="app">
        <Navbar />
        <div class="navPusher">
          { this.renderRouter() }
          <Footer />
        </div>
      </div>
    );
  }
}

