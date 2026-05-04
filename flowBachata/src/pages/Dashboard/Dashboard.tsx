import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const buttonStyle = `
    px-4 py-2 rounded-xl font-semibold
    bg-white text-orange-600 shadow-md
    transition-all duration-300 ease-out
    cursor-pointer select-none
    transform
    hover:scale-110 hover:-translate-y-1
    hover:bg-orange-100
    hover:shadow-[0_15px_30px_rgba(255,120,0,0.4)]
    active:scale-95
  `;

  const festivalButton = `
    px-5 py-2 rounded-xl font-semibold
    bg-white text-orange-600 shadow-md
    hover:scale-105 hover:bg-orange-100 transition
  `;

  const openInsta = (url: string) => {
    window.open(url, "_blank");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 text-white overflow-auto">
      {/* HEADER */}
      <div className="relative flex items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-white via-yellow-100 to-orange-200 text-transparent bg-clip-text drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]">
          🔥 Dashboard FlowBachata
        </h1>

        <div className="absolute right-6 flex gap-3">
          <button onClick={() => navigate("/")} className={buttonStyle}>
            Home
          </button>

          <button onClick={handleLogout} className={buttonStyle}>
            Log out
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex items-center justify-center h-[calc(100%-80px)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Bienvenido {user?.name || "Bailarín"} 💃
          </h2>

          <p className="text-white/70 mb-6">
            Festivales de bachata más top del mundo
          </p>

          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={() =>
                openInsta("https://www.instagram.com/alpesbachatacongress")
              }
              className={festivalButton}
            >
              Alpes Bachata Congress
            </button>

            <button
              onClick={() =>
                openInsta("https://www.instagram.com/esenciaparadise")
              }
              className={festivalButton}
            >
              Esencia Paradise
            </button>

            <button
              onClick={() =>
                openInsta(
                  "https://www.instagram.com/alodominicanfestivalbarcelona/",
                )
              }
              className={festivalButton}
            >
              A Lo Dominican Festival
            </button>

            <button
              onClick={() =>
                openInsta("https://www.instagram.com/bswcongress/")
              }
              className={festivalButton}
            >
              Bachata Spain World Congress
            </button>

            <button
              onClick={() =>
                openInsta("https://www.instagram.com/adambachatafestival/")
              }
              className={festivalButton}
            >
              A'dam Bachata Festival
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
