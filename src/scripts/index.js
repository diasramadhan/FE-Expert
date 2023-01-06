import 'regenerator-runtime'; /* for async await transpile */

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../component/web-component';

import '../styles/style.scss';

import swRegister from './utils/sw-register';

// import './_content';

import App from './views/app';

const app = new App({
  menuBtn: document.getElementById('menu-btn'),
  nav: document.querySelector('header .app-bar nav'),
  header: document.querySelector('header'),
  content: document.getElementById('maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
