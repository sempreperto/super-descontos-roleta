"use client"; // necessário se estiver usando App Router

import { useState } from "react";

const premios = [
  "5% OFF",
  "10% OFF",
  "Frete Grátis",
  "Produto Brinde",
  "15% OFF",
  "Errou! Tente Novamente",
];

export default function Roleta() {
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState<string | null>(null);

  const girarRoleta = () => {
    if (girando) return;
    setGirando(true);
    setResultado(null);

    const sorteado = Math.floor(Math.random() * premios.length);

    setTimeout(() => {
      setResultado(premios[sorteado]);
      setGirando(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div
        className={`w-64 h-64 rounded-full border-8 border-red-500 flex items-center justify-center text-center text-xl font-bold bg-white transition-transform duration-[3000ms] ${
          girando ? "rotate-[1440deg]" : ""
        }`}
      >
        🎁
      </div>
      <button
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        onClick={girarRoleta}
        disabled={girando}
      >
        {girando ? "Girando..." : "Girar Roleta"}
      </button>
      {resultado && (
        <p className="mt-4 text-lg font-semibold text-green-600">
          🎉 Você ganhou: {resultado}
        </p>
      )}
    </div>
  );
}
