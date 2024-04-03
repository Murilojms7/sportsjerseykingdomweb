import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <NavBar active={"paginaInicial"}/>

      <h1 className="font-bold size-20">Página Inicial</h1>
    </main>
  );
}