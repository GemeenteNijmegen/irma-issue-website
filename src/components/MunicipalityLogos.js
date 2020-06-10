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

  render() {
    return (
      <div class="mainContainer" style="padding-bottom: 0;">
        <div class="container lightBackground paddingBottom" style="padding-top: 20px">
          <div class="wrapper municipalityLogos">
            <h2>Deze dienst wordt mede mogelijk gemaakt door:</h2>
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
