import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // VIDEO DESDE GOOGLE DRIVE (LINK DIRECTO)
  const videos = [
    "https://drive.google.com/uc?export=download&id=1ibR1fwUDfRZavMv3EPaB51lDk7NW4LtN"
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true; // obligatorio autoplay
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [playKey]);

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
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 flex items-center justify-center">

      <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden">

        <video
          key={playKey}
          ref={videoRef}
          className="w-full h-auto"
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videos[0]} type="video/mp4" />
        </video>

        {!isPlaying && (
          <button
            onClick={handleUserPlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="px-4 py-2 bg-white text-black rounded">
              Play
            </div>
          </button>
        )}

      </div>

      <button
        onClick={() => navigate("/login")}
        className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded"
      >
        Login
      </button>

    </div>
  );
}