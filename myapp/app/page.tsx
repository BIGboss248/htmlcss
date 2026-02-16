import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-amber-700 p-4 flex align-middle justify-around sticky top-0 right-0 left-0">
        <div>
          <a href="">LOGO</a>
        </div>
        <nav className="space-x-4">
          <a href="">Home</a>
          <a href="/about">about</a>
          <a href="/contact-us">contact us</a>
        </nav>
      </header>
      <div className="bg-slate-500 p-4 h-screen">
        <div className="grid grid-cols-3 gap-4 justify-items-center text-center text-black">
          <div className="bg-amber-600 w-20 h-20 content-center">product1</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product2</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product3</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product4</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product5</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product6</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product7</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product8</div>
          <div className="bg-amber-600 w-20 h-20 content-center">product9</div>
        </div>
      </div>
      <footer className="bg-amber-700 flex justify-around text-center p-4">
        <div className="bg-slate-50 text-black p-2 text-left w-lg">
          <h2>Sample site</h2>
          <p>Company site</p>
          <br />
          <p>Find your way across the world</p>
          <div className="flex flex-row justify-items-end space-x-7">
            <div>Logo1</div>
            <div>Logo2</div>
            <div>Logo3</div>
            <div>Logo4</div>
            <div>Logo5</div>
          </div>
        </div>
        <div className="bg-slate-50 text-black p-2">
          section1
        </div>
        <div className="bg-slate-50 text-black p-2">
          section1
        </div>
      </footer>
    </div>
  );
}
