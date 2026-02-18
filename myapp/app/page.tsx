import Image from "next/image";
import { JSX } from "react";

const productGrid: JSX.Element[] = [];



for (let index = 1; index < 28; index++) {
  productGrid.push(<div className="productItem">product{index}</div>);
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="bg-background text-foreground p-4 flex align-middle justify-around sticky top-0 right-0 left-0 text-xl">
        <div>
          <a href="">LOGO</a>
        </div>
        <nav className="space-x-4">
          <a href="">Home</a>
          <a href="/about">about</a>
          <a href="/contact-us">contact us</a>
        </nav>
      </header>
      <main className="bg-slate-500 min-h-screen p-4 grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-items-center text-center text-foreground">
          {productGrid}
        </div>
      </main>
      <footer className="bg-footerBg text-footerFg flex justify-around text-center p-10">
        <div className="p-2 text-left w-lg space-y-1">
          <h2>Sample site</h2>
          <p>Company site</p>
          <br />
          <p>Find your way across the world</p>
          <div className="flex flex-row justify-items-end space-x-7">
            <div>
              <a href="https://instagram.com">
                <Image src="Instagram_Glyph_Gradient.svg" alt="Icon of instagram" width={30} height={30}></Image>
              </a>
            </div>
            <div>Logo2</div>
            <div>Logo3</div>
            <div>Logo4</div>
            <div>Logo5</div>
          </div>
        </div>
        <div className="p-2">
          section1
        </div>
        <div className="p-2">
          section1
        </div>
      </footer>
    </div >
  );
}
