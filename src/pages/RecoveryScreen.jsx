import { useNavigate } from "react-router-dom";

export default function RecoveryScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white text-lg"
      >
        ← Voltar
      </button>

      <div className="w-full max-w-sm p-6">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Recuperar Senha
        </h1>

        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full h-11 px-4 bg-transparent border border-white rounded-md text-white mb-4"
        />

        <button className="w-full h-11 border border-white rounded-md text-white font-semibold hover:bg-white hover:text-purple-700 transition">
          Enviar
        </button>
      </div>
    </div>
  );
}
