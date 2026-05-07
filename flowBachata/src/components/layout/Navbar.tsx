import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-red-100 shadow-sm">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
        FlowBachata 🇩🇴
      </h1>

      <div className="flex gap-4 items-center font-medium">
        <Link className="hover:text-red-500 transition" to="/">
          Home
        </Link>

        {/* 🔥 SOLO SI ESTÁ LOGUEADO */}
        {user && (
          <Link className="hover:text-yellow-600 transition" to="/dashboard">
            Dashboard
          </Link>
        )}

        {!user ? (
          <>
            <Link className="hover:text-orange-500 transition" to="/login">
              Login
            </Link>

            <Link className="hover:text-red-500 transition" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="text-sm text-gray-600">{user.name}</span>

            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow hover:scale-105 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}