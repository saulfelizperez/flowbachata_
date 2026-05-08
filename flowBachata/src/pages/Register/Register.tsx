import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      console.log("🔥 START REGISTER");

      if (!name || !email || !password) {
        alert("Rellena todos los campos");
        return;
      }

      // 🔐 1. Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log("✅ FIREBASE USER:", user.uid);

      // 📦 2. Backend (crear perfil)
      const response = await fetch("http://localhost:4000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user.uid,
          name,
          email: user.email,
        }),
      });

      const data = await response.json();

      console.log("📦 BACKEND RESPONSE:", data);

      if (!response.ok) {
        throw new Error("Backend failed to create user");
      }

      console.log("✅ BACKEND PROFILE CREATED");

      // 💾 3. Login en contexto
      login(
        {
          id: user.uid,
          name,
          email: user.email,
        },
        await user.getIdToken()
      );

      console.log("✅ LOGIN SAVED");

      // 🚀 4. Redirect
      navigate("/dashboard");

      console.log("🚀 NAVIGATED");
    } catch (error: any) {
      console.error("❌ REGISTER ERROR:", error);

      if (error.code === "auth/email-already-in-use") {
        alert("Este email ya está registrado");
      }

      if (error.code === "auth/weak-password") {
        alert("La contraseña es demasiado débil");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 relative">

      <button
        onClick={() => navigate("/login")}
        className="
          absolute top-6 right-6 px-5 py-2 rounded-xl font-semibold z-50
          bg-white text-orange-600 shadow-md
          transform transition-all duration-300 ease-out
          hover:scale-110 hover:-translate-y-2 hover:bg-orange-100
          active:scale-95
        "
      >
        ← Volver
      </button>

      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Crear cuenta 💃
        </h1>

        <p className="text-center text-white/70 mt-2">
          Únete a FlowBachata
        </p>

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

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:opacity-90 transition"
          >
            Crear cuenta
          </button>

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