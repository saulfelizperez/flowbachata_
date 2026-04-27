import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Judith from "../../../assets/videos/Judith.mp4";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [Judith];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playKey, setPlayKey] = useState(0);

  const changeVideo = (newIndex: number) => {
    setCurrent(newIndex);
    setPlayKey((prev) => prev + 1);
  };

  const nextVideo = () => {
    changeVideo((current + 1) % videos.length);
  };

  const prevVideo = () => {
    changeVideo((current - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true; // importante para autoplay
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

  const navBtn =
    "px-6 py-3 rounded-xl font-semibold cursor-pointer select-none " +
    "transition-all duration-300 ease-out transform-gpu " +
    "bg-white text-orange-600 shadow-md " +
    "hover:scale-125 hover:-translate-y-2 " +
    "hover:bg-orange-100 hover:text-orange-700 " +
    "hover:shadow-[0_20px_40px_rgba(255,120,0,0.6)] " +
    "active:scale-95 active:translate-y-0";

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 text-white">

      {/* HEADER */}
      <div className="relative flex items-center justify-center p-6">

        <h1 className="text-4xl font-extrabold">
          FlowBachata 🔥
        </h1>

        <div className="absolute right-6 flex gap-3">
          <button onClick={() => navigate("/login")} className={navBtn}>
            Iniciar sesión
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 rounded-xl font-semibold bg-white/10 text-white border border-white/40"
          >
            Registrarse
          </button>
        </div>

      </div>

      {/* NAV */}
      <div className="flex justify-center mt-10 gap-4 flex-wrap">
        <button onClick={() => navigate("/classes")} className={navBtn}>
          Academias
        </button>

        <button onClick={() => navigate("/social")} className={navBtn}>
          Sociales
        </button>

        <button onClick={() => navigate("/transport")} className={navBtn}>
          Transporte
        </button>
      </div>

      {/* VIDEO */}
      <div className="flex justify-center mt-12 px-6">
        <div className="w-full max-w-4xl bg-white/10 rounded-2xl p-4">

          <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">

            <video
              key={playKey}
              ref={videoRef}
              className="w-full h-full object-contain"
              playsInline
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videos[current]} type="video/mp4" />
            </video>

            {/* PLAY BUTTON */}
            {!isPlaying && (
              <button
                onClick={handleUserPlay}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg transition hover:scale-110 active:scale-95">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7-11-7z" />
                  </svg>
                </div>
              </button>
            )}

          </div>

        </div>
      </div>

    </div>
  );
}