import { Component } from 'preact';

export default class Error extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">Fout</h1>
                <p>{ window.irmaErrorString }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}