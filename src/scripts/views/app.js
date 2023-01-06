import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menuBtn, nav, header, content,
  }) {
    this._menuBtn = menuBtn;
    this._nav = nav;
    this._header = header;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      menuBtn: this._menuBtn,
      nav: this._nav,
      header: this._header,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const header = document.querySelector('header');

    if (url === '/favorite') {
      const content = document.getElementById('maincontent');
      const hero = document.querySelector('.hero-element');
      hero.style.display = 'none';
      header.className = 'solid';
      content.style.marginTop = '10rem';
    } else {
      header.classList.toggle('solid', window.scrollY > 300);
    }

    const skipLinkElem = document.querySelector('.skip-link');

    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
