import { Component } from 'preact';

import MunicipalityLogos from '../../components/MunicipalityLogos';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">Over</h1>
              </div>
            </div>
          </div>
        </div>
        <MunicipalityLogos />
      </div>
    );
  }
}