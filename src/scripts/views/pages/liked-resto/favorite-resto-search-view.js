import { showCardResto } from '../../templetes/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text" placeholder="Silakan cari restoran favoritemu...">
        <h2 class="content__heading title-favorite">Your Liked Resto</h2>
          <div id="restos" class="restos resto-list">
          </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    this.showFavoriteRestos(restos);
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce((carry, resto) => carry.concat(showCardResto(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restos').innerHTML = html;

    document.getElementById('restos').dispatchEvent(new Event('restos:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="resto-item__not__found restos__not__found">Tidak ada resto untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
