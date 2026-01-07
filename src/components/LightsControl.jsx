import { useState } from 'react';
import { ArrowLeft, Lightbulb, Power } from 'lucide-react';

export default function LightsControl({ onBack, darkMode }) {
  const [lights, setLights] = useState([
    { id: '1', name: 'Luz Principal', room: 'Sala de Estar', isOn: true, brightness: 80 },
    { id: '2', name: 'Luz Ambiente', room: 'Sala de Estar', isOn: false, brightness: 50 },
    { id: '3', name: 'Luz do Teto', room: 'Quarto', isOn: true, brightness: 60 },
    { id: '4', name: 'Abajur', room: 'Quarto', isOn: false, brightness: 40 },
    { id: '5', name: 'Luz Principal', room: 'Cozinha', isOn: true, brightness: 100 },
    { id: '6', name: 'Luz do Armário', room: 'Cozinha', isOn: false, brightness: 70 },
    { id: '7', name: 'Luz do Espelho', room: 'Banheiro', isOn: false, brightness: 90 },
    { id: '8', name: 'Luz Externa', room: 'Varanda', isOn: true, brightness: 50 },
  ]);

  const toggleLight = (id) => {
    setLights(lights.map(light =>
      light.id === id ? { ...light, isOn: !light.isOn } : light
    ));
  };

  const groupedLights = lights.reduce((acc, light) => {
    if (!acc[light.room]) acc[light.room] = [];
    acc[light.room].push(light);
    return acc;
  }, {});

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-purple-200 dark:border-purple-800 hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 dark:from-purple-400 dark:via-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
          Controle de Iluminação
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          {lights.filter(l => l.isOn).length} de {lights.length} lâmpadas acesas
        </p>
      </header>

      {/* Lights Grid */}
      <div className="space-y-8">
        {Object.entries(groupedLights).map(([room, roomLights]) => (
          <div key={room}>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              {room}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {roomLights.map(light => (
                <div
                  key={light.id}
                  onClick={() => toggleLight(light.id)}
                  className={`relative overflow-hidden rounded-2xl p-6 shadow-xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
                    light.isOn
                      ? 'bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-500 dark:via-yellow-500 dark:to-orange-500 border-amber-300 dark:border-amber-600 hover:shadow-amber-500/40'
                      : 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-slate-500/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Lightbulb
                      className={`w-8 h-8 ${
                        light.isOn
                          ? 'text-white drop-shadow-lg'
                          : 'text-slate-400 dark:text-slate-500'
                      }`}
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLight(light.id);
                      }}
                      className={`p-2 rounded-lg ${
                        light.isOn
                          ? 'bg-white/30 hover:bg-white/40'
                          : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                      }`}
                    >
                      <Power
                        className={`w-5 h-5 ${
                          light.isOn
                            ? 'text-white'
                            : 'text-slate-600 dark:text-slate-400'
                        }`}
                      />
                    </button>
                  </div>

                  <h3 className={`font-bold mb-1 ${light.isOn ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                    {light.name}
                  </h3>

                  <p className={`text-sm mb-3 ${light.isOn ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'}`}>
                    {light.isOn ? 'Ligada' : 'Desligada'}
                  </p>

                  {/* Brilho */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className={light.isOn ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'}>
                        Brilho
                      </span>
                      <span className={light.isOn ? 'text-white font-semibold' : 'text-slate-700 dark:text-slate-300'}>
                        {light.brightness}%
                      </span>
                    </div>

                    <div className={`w-full h-2 rounded-full overflow-hidden ${
                      light.isOn ? 'bg-white/30' : 'bg-slate-200 dark:bg-slate-700'
                    }`}>
                      <div
                        className={`h-full rounded-full ${light.isOn ? 'bg-white' : 'bg-slate-400 dark:bg-slate-500'}`}
                        style={{ width: `${light.brightness}%` }}
                      />
                    </div>
                  </div>

                  {light.isOn && (
                    <>
                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl" />
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
