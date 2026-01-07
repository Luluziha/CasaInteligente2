import { useNavigate } from "react-router-dom";
import CasaIcon from "../assets/casa-inteligente (1).png";

export default function CadastroScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-white text-lg"
      >
        ← Voltar
      </button>

      <div className="w-full max-w-sm p-6 flex flex-col items-center">
        <img
          src={CasaIcon}
          alt="Casa Inteligente"
          className="w-32 mb-6 opacity-25 invert"
        />

        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Criar Conta
        </h1>

        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="h-11 px-4 bg-transparent border border-white rounded-md text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="h-11 px-4 bg-transparent border border-white rounded-md text-white"
          />

          <input
            type="password"
            placeholder="Senha"
            className="h-11 px-4 bg-transparent border border-white rounded-md text-white"
          />

          <button className="h-11 border border-white rounded-md text-white font-semibold hover:bg-white hover:text-purple-700 transition">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
