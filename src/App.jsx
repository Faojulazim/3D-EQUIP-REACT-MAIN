import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative px-7 py-5">
        <div class="absolute inset-0 -z-10 h-full w-full bg-whitish bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]  min-h-screen">
          <div class="absolute left-0 right-0 top-70 -z-10 m-auto size-77.5 rounded-full bg-[hsl(20_100%_49%/.7)] opacity-20 blur-[100px]"></div>
        </div>
        <div className="font-outfit">
          <nav className="flex items-center justify-between  gap-x-5  w-full ">
            {/* fixed */}
            <div className="flex gap-x-5 items-center ">
              <div className="size-18.25 bg-white p-3.25 shadow-[1px_8px_30px_-10px_#000]/20 rounded-full">
                <img className="" src="/logo.png" alt="" />
              </div>
              <div className="flex items-center list-none bg-white p-2  tracking-wide shadow-[1px_8px_30px_-10px_#000]/20 rounded-full">
                <li className="bg-orange-500/17 px-5 py-4 rounded-full">
                  Home
                </li>
                <li className=" px-5 py-4 rounded-full">Products</li>
                <li className=" px-5 py-4 rounded-full">About</li>
                <li className=" px-5 py-4 rounded-full">Contact</li>
              </div>
            </div>
            <div className="flex gap-x-5 bg-white p-2 shadow-[1px_8px_30px_-10px_#000]/20 rounded-full">
              <button className="rounded-full px-5 py-4 tracking-[0.025rem]">
                Log In
              </button>
              <button className="rounded-full px-5 py-4 bg-orangish/80 text-white tracking-wide">
                Get Started
              </button>
            </div>
          </nav>
        </div>
        <section className="flex flex-col font-BG items-center mt-60 justify-center max-w-[550px] mx-auto text-center relative">
          <h1 className="text-5xl">3D Printing Made Easier</h1>
          <p className="mt-3 text-[17px]">
            Bringing your ideas to life through custom 3D printing — from
            prototypes to personalized gear, made with precision and passion."
          </p>
          <div className="mt-4 flex gap-x-3">
            <button className="bg-white px-3 py-1 rounded-lg">Sign Up</button>
            <button className="bg-orangish px-3 py-1 rounded-lg text-white">
              Get Started
            </button>
          </div>
          <img
            className="absolute top-[-35px] right-[20px]"
            src="vector-4.svg"
            alt=""
          />
        </section>
      </div>
    </>
  );
}

export default App;
