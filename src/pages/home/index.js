import { Component } from 'preact';

import { namespacedTranslation } from '../../lib/i18n';
import MunicipalityLogos from '../../components/MunicipalityLogos';

const t = namespacedTranslation('Home');

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="homeContainer">
          <div class="homeSplashFade">
            <div class="wrapper homeWrapper">
              <div class="inner">
                <h1 class="projectTitle">{ t('.title') }</h1>
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
              { /* TODO: Replace with IRMA logo and put this next to the Digid login button, instead of underneath */ }
              { window.location.hostname !== 'services-test.nijmegen.nl' ? null :
                <div style="margin-top: 20px;">
                  <a href="re-issue">
                    <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/digid.png" />
                    <h3 style="display: inline-block; position: relative; top: -15px; left: 15px;">Inloggen met IRMA</h3>
                  </a>
                </div>
              }
            </div>
          </div>
        </div>
        <MunicipalityLogos />
      </div>
    );
  }
}
