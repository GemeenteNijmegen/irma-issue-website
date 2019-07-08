import { Component, h } from 'preact';

import irmaLogo from '../assets/irmaLogo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer class="nav-footer" id="footer">
        <section class="sitemap">
          <a href="" class="nav-home" style={{opacity: 1}}>
            <img src={irmaLogo} alt="IRMA Laden" style={{width: '72px'}} />
          </a>
          {/* <div class="footerSection">
            <a href="over">Over</a>
            <a href="faq">Veelgestelde vragen</a>
          </div> */}
        </section>
      </footer>
    );
  }
}
