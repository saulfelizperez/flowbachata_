import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // ✅ VALIDACIÓN AÑADIDA (mínima)
    if (!name || !email || !password) return;

    login({
      id: Date.now(),
      name,
      email,
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 relative">

      {/* 🔙 BOTÓN VOLVER A LOGIN (DERECHA) */}
      <button
        onClick={() => navigate("/login")}
        className="
          absolute top-6 right-6 px-5 py-2 rounded-xl font-semibold z-50
          bg-white text-orange-600 shadow-md
          cursor-pointer select-none

          transform transition-all duration-300 ease-out

          hover:scale-110
          hover:-translate-y-2
          hover:bg-orange-100
          hover:shadow-[0_20px_40px_rgba(255,120,0,0.6)]

          active:scale-95
        "
      >
        ← Volver
      </button>

      {/* CARD */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Crear cuenta 💃
        </h1>

        <p className="text-center text-white/70 mt-2">
          Únete a FlowBachata
        </p>

        {/* FORM */}
        <div className="mt-8 space-y-5">

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-yellow-300"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none focus:ring-2 focus:ring-red-300"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* REGISTER BUTTON */}
          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:opacity-90 transition"
          >
            Crear cuenta
          </button>

          {/* LOGIN LINK */}
          <Link
            to="/login"
            className="block text-center text-white/80 hover:text-white text-sm mt-4"
          >
            ← Volver a login
          </Link>

        </div>

        <p className="text-center text-white/50 text-xs mt-6">
          Estilo RD • Flow, energía y comunidad
        </p>

      </div>
    </div>
  );
}