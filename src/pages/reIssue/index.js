import { Component } from 'preact';

export default class ReIssue extends Component {

  componentDidMount() {
    const sessionPtrJson = window.irmaSessionPtr;
    if(!sessionPtrJson || sessionPtrJson === '') {
      console.error('Could not find sessionPtr on issuance page');
      return;
    }

    let sessionPtr;
    try {
      sessionPtr = JSON.parse(sessionPtrJson);
    } catch(e) {
      console.error('Could not parse sessionPtr');
      return;
    }

    window.irma.handleSession(sessionPtr, {language: 'nl'})
      .then(() => {
        this.setState({statusText: 'Uw attributen zijn succesvol geladen.'});
      })
      .catch(() => {
        this.setState({statusText: 'Er is iets mis gegaan bij het laden van uw attributen'});
      })
  }

  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
              <div class="wrapper homeWrapper">
                  <div class="inner">
                      <h1 class="projectTitle">IRMA BRP attributen verversen</h1>
                  </div>
                  <div style="margin-top: 50px;">
                      <p id="statusText">{ this.state.statusText }</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
