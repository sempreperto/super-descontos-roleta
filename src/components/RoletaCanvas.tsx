/* eslint-disable */
"use client";

import { useEffect } from "react";

export default function RoletaCanvas() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/libs/Winwheel.min.js";
    script.onload = () => {
      const Winwheel = (window as any).Winwheel;
      if (!Winwheel) return;

      // Cria a roleta e guarda em window.myWheel
      (window as any).myWheel = new Winwheel({
        canvasId: "roletaCanvas",
        numSegments: 8,
        outerRadius: 170,
        textFontSize: 14,
        segments: [
          { fillStyle: "#e74c3c", text: "10% desconto" },
          { fillStyle: "#8e44ad", text: "Tente outra vez!" },
          { fillStyle: "#f1c40f", text: "5% desconto" },
          { fillStyle: "#1abc9c", text: "3% desconto" },
          { fillStyle: "#3498db", text: "3% desconto" },
          { fillStyle: "#f39c12", text: "5% desconto" },
          { fillStyle: "#c0392b", text: "10% desconto" },
          { fillStyle: "#9b59b6", text: "Tente outra vez!" },
        ],
        animation: {
          type: "spinToStop",
          duration: 5,
          spins: 8,
          callbackFinished: (indicado: any) => {
            alert(`🎉 Resultado: ${indicado.text}`);
          },
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  const handleGirar = () => {
    const wheel = (window as any).myWheel;
    if (wheel) {
      wheel.startAnimation();
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <canvas id="roletaCanvas" width="400" height="400" className="mb-4" />
      <button
        onClick={handleGirar}
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Girar Roleta
      </button>
    </div>
  );
}
