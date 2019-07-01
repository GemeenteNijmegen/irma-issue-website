import { Component } from 'preact';

export default class DigidLogoutButton extends Component {
  render() {
    return (
      <div style="margin-top: 50px;">
        <a href="https://services-test.nijmegen.nl/irma/gemeente/digid/logout">
          <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/digid.png" />
          <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Uitloggen bij DigiD</h3>
        </a>
      </div>
    );
  }
}
