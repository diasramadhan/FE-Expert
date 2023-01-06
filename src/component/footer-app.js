class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <section>
        <div class="f-column">
          <div class="f-row">
            <div class="navigation">
              <a href="/">Home</a>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Help</a>
            </div>
            <div class="follow-me">
              <h2>Follow Me</h2>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
            <div class="about-us">
              <h2>About Us</h2>
              <a href="#">Contact Us</a>
              <a href="#">Blog</a>
              <a href="#">Q & A</a>
            </div>
            <div class="support">
              <h2>Support</h2>
              <a href="#">Getting Started</a>
              <a href="#">Help Center</a>
            </div>
          </div>

          <div class="f-row copy-right">
            <p class="">Copyright © 2022, Built With <span>❤</span> by Dias Nur Ramadhan</p>
          </div>
        </div>
      </section>
    </footer>
    `;
  }
}
customElements.define('footer-app', FooterApp);
