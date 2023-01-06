const DrawerInitiator = {
  init({
    menuBtn, nav, header, content,
  }) {
    menuBtn.addEventListener('click', () => {
      this._toggleDrawer(menuBtn, nav);
    });

    content.addEventListener('click', () => {
      nav.classList.remove('active');
    });

    menuBtn.onkeypress = () => {
      menuBtn.classList.toggle('fa-times');
      nav.classList.toggle('active');
    };

    window.addEventListener('scroll', () => {
      this._scrollWindow(nav, menuBtn);
    });

    window.addEventListener('scroll', (event) => {
      this._scrollBackgroundNav(event, header);
    });
  },

  _toggleDrawer(menuBtn, nav) {
    menuBtn.classList.toggle('fa-times');
    nav.classList.toggle('active');
  },

  _scrollWindow(nav, menuBtn) {
    menuBtn.classList.remove('fa-times');
    nav.classList.remove('active');
  },

  _scrollBackgroundNav(event, header) {
    event.stopPropagation();
    header.classList.toggle('solid', window.scrollY >= 0);
  },
};

export default DrawerInitiator;
