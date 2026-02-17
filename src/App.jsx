import { useEffect, useState } from "react";

function App() {
  const [matchesHeight, setMatchesHeight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMatchesHeight(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative px-7 min-h-[200vh]">
        <div className="absolute inset-0 -z-10 h-full w-full bg-whitish bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]  ">
          <div className="absolute left-0 right-0 top-70 -z-10 m-auto size-77.5 rounded-full bg-[hsl(20_100%_49%/.7)] opacity-20 blur-[100px]"></div>
        </div>{" "}
        {/* shadow-[1px_8px_30px_-10px_#000]/20 */}
        <div className="font-outfit w-full sticky top-0 py-5 z-[200000]">
          <nav className="flex items-center gap-x-5  w-full  relative  rounded-full">
            <div
              className={`size-18.25 bg-white p-3.25 shadow-[1px_0_30px_-5px_#000]/20 rounded-full shrink-0 hover:bg-orangish/25 transition-all duration-300 ${matchesHeight ? "shadow-[1px_0_30px_-5px_#000]/30 bg-white" : ""}`}
            >
              <img className="" src="/logo.png" alt="" />
            </div>
            <div
              className={`flex gap-x-5 transition-all duration-300 w-full justify-between rounded-full ${matchesHeight ? "shadow-[1px_0_30px_-5px_#000]/30 bg-white" : ""}`}
              id="navMain"
            >
              <div
                className={`flex items-center list-none bg-white p-2  tracking-wide rounded-full gap-x-2 transition-all ${!matchesHeight ? "shadow-[1px_0_30px_-5px_#000]/20" : ""}`}
                id="links"
              >
                <li className="cursor-pointer transition-all bg-orange-500/17 px-5 py-4 rounded-full ">
                  Home
                </li>
                <li className=" cursor-pointer transition-all px-5 py-4 rounded-full hover:bg-orange-500/17">
                  Gallery
                </li>
                <li className=" cursor-pointer transition-all px-5 py-4 rounded-full hover:bg-orange-500/17">
                  About
                </li>
                <li className="cursor-pointer transition-all  px-5 py-4 rounded-full hover:bg-orange-500/17">
                  Contact
                </li>
              </div>
              {/*  shadow-[1px_8px_30px_-10px_#000]/20 */}
              <div
                className={`flex gap-x-5 bg-white p-2 rounded-full  transition-all ${!matchesHeight ? "shadow-[1px_0_30px_-5px_#000]/20" : ""}`}
                id="navBtns"
              >
                {/* <button className="rounded-full px-5 py-4 tracking-[0.025rem] underline">
                  Log In
                </button> */}
                <button className="rounded-full px-5 py-4 bg-orangish/80 hover:border-orangish transition-all hover:text-black border hover:bg-white text-white tracking-wide">
                  Print Your Own
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex items-center justify-center mt-45 w-[430px] h-[140px] absolute left-1/2 -translate-x-1/2">
          <img
            className="w-[110px] h-[140px] object-cover object-left  absolute z-[200] rounded-lg transition-all left-0 hover:translate-y-[-20px] delay-[15ms]"
            src="https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className="w-[110px] h-[140px] object-cover object-left  absolute  z-[199] rotate-4 rounded-lg rotate-0 transition-all left-[80px] hover:translate-y-[-20px] hover:z-[200] delay-[15ms]"
            src="https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <img
            className="w-[110px] h-[140px] object-cover object-left  absolute  z-[198] rotate-4 rounded-lg transition-all left-[160px] hover:translate-y-[-20px] hover:z-[200] delay-[15ms]"
            src="https://plus.unsplash.com/premium_photo-1714675572532-3153b016ac48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="w-[110px] h-[140px] object-cover object-left  absolute z-[197] rotate-4 rounded-lg transition-all left-[240px] hover:translate-y-[-20px] hover:z-[200] delay-[15ms]"
            src="https://plus.unsplash.com/premium_photo-1714859729114-e3f8a3ca8e69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="w-[110px] h-[140px] object-cover object-left  absolute z-[196] rotate-4 rounded-lg transition-all left-[320px] hover:translate-y-[-20px] hover:z-[200] delay-[15ms]"
            src="https://images.unsplash.com/photo-1645084102549-e766a3a24827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <section className="flex flex-col font-BG items-center mt-85 justify-center max-w-[550px] mx-auto text-center relative">
          <h1 className="text-5xl">3D Printing Made Easier</h1>
          <p className="mt-3 text-[17px]">
            Bringing your ideas to life through custom 3D printing — from
            prototypes to personalized gear, made with precision and passion."
          </p>
          <div className="mt-4 flex gap-x-3 relative">
            <button className="bg-white px-3 py-1 rounded-lg cursor-pointer hover:bg-[hsl(0_0%_97%)]">
              Contact
            </button>
            <button className="bg-orangish px-3 py-1 rounded-lg cursor-pointer hover:bg-orangish/60 text-white z-[2000]">
              See More
            </button>
          </div>
          <img
            className="absolute top-[-35px] right-[20px] z-[1]"
            src="vector-4.svg"
            alt=""
          />
        </section>
        <section>
          <h1></h1>
        </section>
      </div>
    </>
  );
}

export default App;
