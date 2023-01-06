import RestoDataSource from '../../data/restodb-source';
import { showCardResto } from '../templetes/template-creator';

const Home = {
  async render() {
    return `
      <section>
        <h2>Daftar Restoran</h2>
        <div class="resto-list" id="resto-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restorans = await RestoDataSource.getAllResto();
    const restoList = document.getElementById('resto-list');

    if (restorans.length === 0) {
      restoList.innerHTML = '<h2>Konten gagal dimuat (pastikan anda terhubung dengan jaringan)</h2>';
    } else {
      let card = '';
      restorans.forEach((resto) => {
        card += showCardResto(resto);
      });

      restoList.innerHTML = card;
    }
  },
};

export default Home;
