import dynamic from "next/dynamic";

// Corrige o uso de window/canvas no SSR
const RoletaCanvas = dynamic(() => import("../components/RoletaCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-white">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Super Descontos</h1>
      <RoletaCanvas />
    </main>
  );
}
