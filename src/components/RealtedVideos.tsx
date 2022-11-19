/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeContextApi';
import VideoCard from './VideoCard';

type Prop = {
  id: string;
};

export default function RealtedVideos({ id }: Prop) {
  const youtube = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.related(id));
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>something went wrong</p>}
      <ul>
        {videos?.map((video: any) => (
          <VideoCard key={video.id} video={video} isList />
        ))}
      </ul>
    </>
  );
}
