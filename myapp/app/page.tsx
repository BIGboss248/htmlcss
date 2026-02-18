import { JSX } from "react";

const productGrid: JSX.Element[] = [];



for (let index = 1; index < 28; index++) {
  productGrid.push(<div className="productItem">product{index}</div>);
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="bg-slate-500 min-h-screen p-4 grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-items-center text-center text-foreground">
          {productGrid}
        </div>
      </main>
    </div >
  );
}
