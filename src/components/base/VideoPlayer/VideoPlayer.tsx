import { FC, VideoHTMLAttributes, useEffect, useRef } from 'react';

export interface VideoPlayerProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = (props) => {
  const { src, poster, ...rest } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoDom = videoRef.current;

    if (videoDom) {
      videoDom.play();
    }
  }, []);

  return (
    <video
      playsInline
      ref={videoRef}
      controls={false}
      loop
      preload="true"
      autoPlay
      muted
      style={{ display: 'block', width: '100%', height: 'auto' }}
      src={src}
      poster={poster}
      {...rest}
    />
  );
};
