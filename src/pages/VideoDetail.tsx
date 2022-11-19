import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RealtedVideos from '../components/RealtedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-2/3">
        <iframe
          title="iframe"
          id="player"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-line">{description}</pre>
        </div>
      </article>
      <section className="basis-1/3">
        <RealtedVideos id={video.id} />
      </section>
    </section>
  );
}
