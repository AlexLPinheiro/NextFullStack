import BotaoContador from "./components/BotaoContador";

export default function Home(){
  console.log("Olha só, como isso é um server component ele nao aparece no navegador e sim no log do servidor");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1>Olá NextJs</h1>
      <BotaoContador></BotaoContador>

    </main>
  );
}