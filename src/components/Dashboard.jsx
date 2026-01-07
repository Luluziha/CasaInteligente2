import { useState, useEffect } from "react";
import { Moon, Sun, Lightbulb } from "lucide-react";

import TemperatureCard from "./TemperatureCard";
import WeatherCard from "./WeatherCard";
import DateTimeCard from "./DateTimeCard";
import EnergyCard from "./EnergyCard";
import BatteryCard from "./BatteryCard";
import LightsControl  from "./LightsControl";
import Arduino from "./Arduino";


export function Dashboard({ darkMode, onToggleDarkMode }) {
  const [showLights, setShowLights] = useState(false);

  const [temperature, setTemperature] = useState(23);
  const [humidity, setHumidity] = useState(65);
  const [batteryPercentage, setBatteryPercentage] = useState(80);
  const [batteryAmperage, setBatteryAmperage] = useState(12.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(v => v + (Math.random() - 0.5));
      setHumidity(v => Math.max(40, Math.min(80, v + (Math.random() - 0.5))));
      setBatteryPercentage(v => Math.max(20, Math.min(100, v + (Math.random() - 0.5))));
      setBatteryAmperage(v => Math.max(0, Math.min(20, v + (Math.random() - 0.5))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Arduino>
      <div className="p-4 md:p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
              Smart Home
            </h1>
            <p className="text-slate-500">Central de Controle</p>
          </div>

          <button onClick={onToggleDarkMode}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </header>

        {!showLights ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TemperatureCard temperature={temperature} humidity={humidity} />
            <WeatherCard />
            <DateTimeCard />
            <EnergyCard
              batteryPercentage={batteryPercentage}
              batteryAmperage={batteryAmperage}
            />

            <div
              onClick={() => setShowLights(true)}
              className="cursor-pointer rounded-2xl bg-gradient-to-br from-amber-500 to-pink-500 p-6 text-white"
            >
              <Lightbulb className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold">Iluminação</h3>
              <p>Gerenciar lâmpadas</p>
            </div>
          </div>
        ) : (
          <LightsControl onBack={() => setShowLights(false)} />
        )}
      </div>
    </Arduino>
  );
}
