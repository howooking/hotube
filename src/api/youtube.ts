/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class Youtube {
  httpClient: any;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string) {
    return this.httpClient
      .get('channels', {
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res: any) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async related(id: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          relatedToVideoId: id,
          type: 'video',
          maxResults: 25,
        },
      })
      .then((res: any) =>
        res.data.items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res: any) => res.data.items)
      .then((items: any) =>
        items.map((item: any) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res: any) => res.data.items);
  }
}
