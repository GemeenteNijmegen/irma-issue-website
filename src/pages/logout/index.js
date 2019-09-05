import { Component, h } from 'preact';
import DigidLogoutButton from '../../components/DigidLogoutButton';

export default class Logout extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">U bent uitgelogd bij DigiD</h1>
                <p>U kunt deze pagina sluiten, of <a href="/irma/gemeente/start">terugkeren</a> naar de startpagina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
