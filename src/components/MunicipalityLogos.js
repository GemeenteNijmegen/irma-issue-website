import { Component, h } from 'preact';

import alblasserdam from '../assets/gemeenten-logos/alblasserdam.png';
import amsterdam from '../assets/gemeenten-logos/amsterdam.png';
import buren from '../assets/gemeenten-logos/buren.png';
import dordrecht from '../assets/gemeenten-logos/dordrecht.png';
import groningen from '../assets/gemeenten-logos/groningen.png';
import heerenveen from '../assets/gemeenten-logos/heerenveen.png';
import nijmegen from '../assets/gemeenten-logos/nijmegen.png';
import sudwestFryslan from '../assets/gemeenten-logos/sudwest-fryslan.png';
import alkmaar from '../assets/gemeenten-logos/alkmaar.png';
import arnhem from '../assets/gemeenten-logos/arnhem.png';
import debilt from '../assets/gemeenten-logos/debilt.png';
import eindhoven from '../assets/gemeenten-logos/eindhoven.png';
import haarlem from '../assets/gemeenten-logos/haarlem.png';
import helmond from '../assets/gemeenten-logos/helmond.png';
import oss from '../assets/gemeenten-logos/oss.png';
import utrecht from '../assets/gemeenten-logos/utrecht.png';
import almere from '../assets/gemeenten-logos/almere.png';
import boekel from '../assets/gemeenten-logos/boekel.png';
import denbosch from '../assets/gemeenten-logos/denbosch.png';
import emmen from '../assets/gemeenten-logos/emmen.png';
import haarlemmermeer from '../assets/gemeenten-logos/haarlemmermeer.png';
import hendrikIdoAmbacht from '../assets/gemeenten-logos/hendrik-ido-ambacht.png';
import papendrecht from '../assets/gemeenten-logos/papendrecht.png';
import zwijndrecht from '../assets/gemeenten-logos/zwijndrecht.png';
import amersfoort from '../assets/gemeenten-logos/amersfoort.png';
import breda from '../assets/gemeenten-logos/breda.png';
import deventer from '../assets/gemeenten-logos/deventer.png';
import enschede from '../assets/gemeenten-logos/enschede.png';
import hardinxveldGiessendam from '../assets/gemeenten-logos/hardinxveld-giessendam.png';
import meierijstad from '../assets/gemeenten-logos/meierijstad.png';
import sliedrecht from '../assets/gemeenten-logos/sliedrecht.png';

export default class MunicipalityLogos extends Component {

  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/alblasserdam.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/amsterdam.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/buren.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/dordrecht.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/groningen.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/heerenveen.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/nijmegen.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/sudwest-fryslan.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/alkmaar.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/arnhem.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/debilt.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/eindhoven.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/haarlem.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/helmond.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/oss.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/utrecht.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/almere.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/boekel.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/denbosch.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/emmen.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/haarlemmermeer.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/hendrik-ido-ambacht.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/papendrecht.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/zwijndrecht.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/amersfoort.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/breda.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/deventer.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/enschede.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/hardinxveld-giessendam.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/meierijstad.png"/>
  // <img src="https://s3-eu-west-1.amazonaws.com/irma-brp/img/gemeenten-logos/sliedrecht.png"/>

  render() {
    return (
      <div class="mainContainer" style="padding-bottom: 0;">
        <div class="container lightBackground paddingBottom" style="padding-top: 20px">
          <div class="wrapper municipalityLogos">
            <h2>Deze dienst wordt aangeboden door:</h2>
            <img src={alblasserdam} />
            <img src={amsterdam} />
            <img src={buren} />
            <img src={dordrecht} />
            <img src={groningen} />
            <img src={heerenveen} />
            <img src={nijmegen} />
            <img src={sudwestFryslan} />
            <img src={alkmaar} />
            <img src={arnhem} />
            <img src={debilt} />
            <img src={eindhoven} />
            <img src={haarlem} />
            <img src={helmond} />
            <img src={oss} />
            <img src={utrecht} />
            <img src={almere} />
            <img src={boekel} />
            <img src={denbosch} />
            <img src={emmen} />
            <img src={haarlemmermeer} />
            <img src={hendrikIdoAmbacht} />
            <img src={papendrecht} />
            <img src={zwijndrecht} />
            <img src={amersfoort} />
            <img src={breda} />
            <img src={deventer} />
            <img src={enschede} />
            <img src={hardinxveldGiessendam} />
            <img src={meierijstad} />
            <img src={sliedrecht} />
          </div>
        </div>
      </div>
    );
  }
}
