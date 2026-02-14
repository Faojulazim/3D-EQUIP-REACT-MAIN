import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-whitish  font-outfit">
        <nav className="flex items-center justify-between px-7 py-5 py-2 gap-x-5">
          <div className="flex gap-x-5 items-center">
            <div className="size-[73px] bg-white rounded-full p-[13px]">
              <img className="" src="/logo.png" alt="" />
            </div>
            <div className="flex items-center list-none bg-white p-2 rounded-full tracking-wide">
              <li className="bg-orange-500/17 px-5 py-4 rounded-full">Home</li>
              <li className=" px-5 py-4 rounded-full">Products</li>
              <li className=" px-5 py-4 rounded-full">About</li>
              <li className=" px-5 py-4 rounded-full">Contact</li>
            </div>
          </div>
          <div className="flex gap-x-5 bg-white p-2 rounded-full">
            <button className="rounded-full px-5 py-4 tracking-[0.025rem]">
              Log In
            </button>
            <button className="rounded-full px-5 py-4 bg-orangish/80 text-white tracking-wide">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
