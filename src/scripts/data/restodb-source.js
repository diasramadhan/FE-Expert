import API_ENDPOINT from '../globals/api-endpoint';
import { getData } from '../utils/data-fetching';

class RestoDataSource {
  static async getAllResto() {
    const jsonResponse = await getData(API_ENDPOINT.LIST);
    if (jsonResponse.restaurants) {
      return jsonResponse.restaurants;
    }
    throw new Error('Daftar restaurant kosong.');
  }

  static async getRestoDetail(id) {
    const jsonResponse = await getData(API_ENDPOINT.DETAIL(id));
    if (jsonResponse.restaurant) {
      return jsonResponse.restaurant;
    }
    throw new Error('Detail restaurant tidak ditemukan.');
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestoDataSource;
