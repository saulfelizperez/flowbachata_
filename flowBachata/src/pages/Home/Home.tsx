import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🔥 SOLO UN VIDEO (LORENA ELIMINADO)
  const videos = [
    "/videos/Judith.mp4",
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsUserAction, setNeedsUserAction] = useState(false);
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
        video.muted = false;
        await video.play();
        setIsPlaying(true);
        setNeedsUserAction(false);
      } catch {
        setIsPlaying(false);
        setNeedsUserAction(true);
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
      setNeedsUserAction(false);
    } catch {
      setNeedsUserAction(true);
    }
  };

  const arrowBtn =
    "absolute top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg transition hover:scale-110 hover:bg-black/60 active:scale-95";

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

        <h1 className="
          text-4xl font-extrabold px-8 py-3 rounded-2xl
          bg-white/10 backdrop-blur-xl border border-white/20
          shadow-[0_0_30px_rgba(255,120,0,0.4)]
          bg-gradient-to-r from-white via-yellow-100 to-white
          text-transparent bg-clip-text
        ">
          FlowBachata 🔥
        </h1>

        <div className="absolute right-6 flex gap-3">

          <button
            onClick={() => navigate("/login")}
            className={navBtn}
          >
            Iniciar sesión
          </button>

          <button
            onClick={() => navigate("/register")}
            className="
              px-4 py-2 rounded-xl font-semibold cursor-pointer select-none
              transition-all duration-300 ease-out transform-gpu
              bg-white/10 text-white border border-white/40 shadow-md
              hover:scale-125 hover:-translate-y-2
              hover:bg-white/20 hover:border-white
              hover:shadow-[0_20px_40px_rgba(255,120,0,0.4)]
              active:scale-95 active:translate-y-0
            "
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

        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">

          {/* ❌ ELIMINADO: "Video 1/2" COMPLETAMENTE */}

          <div className="relative w-full aspect-video max-h-[70vh] bg-black rounded-xl overflow-hidden">

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

            {/* PLAY CENTRAL */}
            {!isPlaying && (
              <button
                onClick={handleUserPlay}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}

            {/* FLECHAS (ahora inútiles pero no rompen nada) */}
            <button className={`${arrowBtn} left-3`} onClick={prevVideo}>
              ←
            </button>

            <button className={`${arrowBtn} right-3`} onClick={nextVideo}>
              →
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}