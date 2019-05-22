import { Component } from 'preact';

import MunicipalityLogos from '../../components/MunicipalityLogos';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">IRMA BRP attributen laden via DigiD</h1>
              </div>
              <div style="margin: 0 auto; max-width: 80%">
                <p>Via deze pagina kunt u uw gegevens uit de basisregistratie personen (BRP) laden als attributen in IRMA. Klik op 'inloggen' om in te loggen met DigiD en het laden van de IRMA attributen te starten.</p>
              </div>
              <div style="margin-top: 50px;">
                <a href="issue">
                  <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/digid.png" />
                  <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Inloggen met DigiD</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <MunicipalityLogos />
      </div>
    );
  }
}