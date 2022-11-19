/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class FakeYoutube {
  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async channelImageURL() {
    return axios
      .get('/videos/channel.json')
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async related() {
    return axios
      .get('/videos/related.json')
      .then((res) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #searchByKeyword() {
    return axios
      .get('/videos/search.json')
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return axios.get('/videos/popular.json').then((res) => res.data.items);
  }
}
