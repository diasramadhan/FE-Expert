import UrlParser from '../../routes/url-parser';
import RestoDataSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templetes/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <section class="container"></section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestoDataSource.getRestoDetail(url.id);
    const detailContainer = document.querySelector('section.container');
    detailContainer.innerHTML = createRestoDetailTemplate(restoran);
    const inputName = document.querySelector('#input-name');
    const inputReview = document.querySelector('#input-review');
    const reviewsubmit = document.querySelector('#button-submit');
    reviewsubmit.addEventListener('click', async (event) => {
      const review = {
        id: restoran.id,
        name: inputName.value,
        review: inputReview.value,
      };
      if (inputName.value === '' || inputReview.value === '') {
        alert('Required Name and Review');
      } else {
        event.preventDefault();
        await RestoDataSource.addReview(review).then(() => {
          location.reload();
        });
        alert('Thanks for Your Review');
      }
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: restoran.id,
        pictureId: restoran.pictureId,
        name: restoran.name,
        rating: restoran.rating,
        city: restoran.city,
        description: restoran.description,
      },
    });
  },
};

export default Detail;
