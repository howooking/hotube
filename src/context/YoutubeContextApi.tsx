/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from 'react';
import FakeYoutube from '../api/fake.youtube';
import Youtube from '../api/youtube';

type YoutubeApiProviderProp = {
  children: React.ReactNode;
};
type YoutubeApiContextType = {
  search(keyword?: string): any;
  channelImageURL(id?: string): any;
  related(id?: string): any;
};

export const YoutubeApiContext = createContext<YoutubeApiContextType>({
  search: () => {},
  channelImageURL: () => {},
  related: () => {},
});

// const youtube = new Youtube();
const youtube = new FakeYoutube();
export function YoutubeApiProvider({ children }: YoutubeApiProviderProp) {
  return (
    <YoutubeApiContext.Provider value={youtube}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
