import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ["/videos/Judith.mp4"];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [playKey, current]);

  const handleUserPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      await video.play();
      setIsPlaying(true);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <div className="w-full max-w-3xl">

        <video
          key={playKey}
          ref={videoRef}
          className="w-full rounded-xl"
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videos[current]} type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            onClick={handleUserPlay}
            className="mt-4 px-4 py-2 bg-white text-black rounded"
          >
            Play
          </button>
        )}

      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 text-sm opacity-70"
      >
        Home
      </button>

    </div>
  );
}