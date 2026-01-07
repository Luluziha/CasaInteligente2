import { Link, useNavigate } from "react-router-dom";
import CasaIcon from "../assets/casa-inteligente (1).png";

export default function LoginScreen() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // aqui futuramente entra validação / API
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center 
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">

      <div className="flex flex-col items-center w-full max-w-md px-6">

        <img
          src={CasaIcon}
          alt="Casa Inteligente"
          className="w-40 mx-auto mb-6 opacity-25 invert"
        />

        <h1 className="text-white text-2xl font-bold text-center mb-8">
          Bem-Vindo ao APP da Casa Inteligente
        </h1>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">

          {/* Usuário */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975
                     m11.963 0a9 9 0 1 0-11.963 0
                     M15 9.75a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Usuário"
              className="w-full h-11 pl-10 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75
                     m-.75 0h10.5a.75.75 0 0 1 .75.75v6
                     a.75.75 0 0 1-.75.75H6.75
                     a.75.75 0 0 1-.75-.75v-6
                     a.75.75 0 0 1 .75-.75Z" />
              </svg>
            </span>

            <input
              type="password"
              placeholder="Senha"
              className="w-full h-11 pl-10 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="button"
            className="mt-4 h-11 border border-white rounded-md text-white font-semibold hover:bg-white hover:text-purple-600 transition shadow-lg shadow-cyan-500/50"
          >
            Entrar
          </button>

          <Link
            to="/recuperar"
            className="text-white text-lg text-center hover:underline"
          >
            Esqueceu a senha?
          </Link>

          <Link
            to="/cadastro"
            className="text-white text-lg text-center font-semibold hover:underline"
          >
            Criar conta
          </Link>
        </form>
      </div>
    </div>
    
  );
}