import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/auth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) return;

    try {
      const response = await loginUser(email, password);

      // 🔥 DEBUG TOTAL: ver exactamente qué devuelve el backend
      console.log("LOGIN RESPONSE COMPLETA 👉", response);

      // 🔥 intentar sacar el token en distintos formatos típicos
      const token =
        response?.token ||
        response?.data?.token ||
        response?.idToken ||
        response;

      console.log("🔥 TOKEN EXTRAÍDO 👉", token);

      if (!token) {
        console.error("❌ No se encontró token en la respuesta");
        return;
      }

      const userData = {
        id: email,
        name: email,
        email: email,
      };

      login(userData, token);

      navigate("/dashboard", { replace: true });

    } catch (error) {
      console.error("Error login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 relative">

      {/* 🔙 BOTÓN VOLVER A HOME */}
      <button
        onClick={() => navigate("/")}
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
          Iniciar sesión 🔥
        </h1>

        <p className="text-center text-white/70 mt-2">
          Bienvenido de nuevo a FlowBachata
        </p>

        <div className="mt-8 space-y-5">

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

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:opacity-90 transition"
          >
            Entrar
          </button>

          <p className="text-center text-white/70 text-sm mt-4">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-white font-semibold underline hover:text-yellow-200"
            >
              Regístrate
            </Link>
          </p>

        </div>

        <p className="text-center text-white/50 text-xs mt-6">
          Estilo RD • Flow, energía y comunidad
        </p>

      </div>
    </div>
  );
}