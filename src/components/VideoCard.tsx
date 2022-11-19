/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import formatAgo from '../util/date';

type Prop = {
  video: any;
  isList: boolean;
};

export default function VideoCard({ video, isList }: Prop) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      className={`cursor-pointer ${isList ? 'flex gap-1 m-2' : ''}`}
      onClick={() =>
        navigate(`/videos/watch/${video.id}`, { state: { video } })
      }
      aria-hidden="true"
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.high.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
