import { Component, h } from 'preact';

import digidLogo from '../assets/digidLogo.png';

export default class DigidLogoutButton extends Component {
  render() {
    return (
      <div style="margin-top: 50px;">
        <a href="/irma/gemeente/digid/logout" native>
          <img src={digidLogo} />
          <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Uitloggen bij DigiD</h3>
        </a>
      </div>
    );
  }
}
