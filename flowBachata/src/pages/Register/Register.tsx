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
      if (!name || !email || !password) {
        alert("Rellena todos los campos");
        return;
      }

      // 🔐 Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // 📦 Backend create user
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            name,
            email: user.email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Error creando usuario en backend");
      }

      // 💾 Guardar en contexto
      login(
        {
          id: user.uid,
          name,
          email: user.email || "",
        },
        await user.getIdToken()
      );

      // 🚀 redirect
      navigate("/dashboard");

    } catch (error: any) {
      console.error("REGISTER ERROR:", error);

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
        className="absolute top-6 right-6 px-5 py-2 rounded-xl font-semibold z-50 bg-white text-orange-600 shadow-md"
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
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white outline-none"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"
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