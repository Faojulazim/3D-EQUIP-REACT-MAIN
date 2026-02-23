import React from "react";

function Gallery() {
  return (
    <div className="font-BG flex-col">
      <div className="font-BG text-2xl lg:text-3xl 2xl:text-4xl relative ">
        <div>Bet you haven't seen this</div>
        <div className="flex relative">
          <span className="font-youngSerif text-3xl relative after:absolute after:w-full after:h-[4px] z-[3000] after:bg-orangish after:bottom-[7px] after:left-0 after:z-[-20] lg:text-4xl 2xl:text-5xl">
            anywhere
          </span>
          <div className="absolute left-0 top-[-20px] -z-10 m-auto size-35.5 xl:size-45 2xl:size-55 rounded-full bg-[hsl(20_100%_49%/.7)] opacity-20 blur-[20px] xl:top-[-30px] 2xl:top-[-60px]"></div>
        </div>
      </div>
      <div className="grid mt-5 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:mt-8">
        <img
          className=" w-full hover: object-cover object-left z-[200] rounded-lg transition-all rotate-0 hover:translate-y-[-20px] delay-[15ms]"
          src="https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[199] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://plus.unsplash.com/premium_photo-1715876679877-079db51d1d6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[198] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://plus.unsplash.com/premium_photo-1714675572532-3153b016ac48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[197] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://plus.unsplash.com/premium_photo-1714859729114-e3f8a3ca8e69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[196] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://images.unsplash.com/photo-1645084102549-e766a3a24827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[196] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[196] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://images.unsplash.com/photo-1645084102549-e766a3a24827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fDNkJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <img
          className=" w-full object-cover object-left hover:z-[200] z-[196] rounded-lg transition-all  hover:translate-y-[-20px] delay-[15ms]"
          src="https://plus.unsplash.com/premium_photo-1714859729164-5e5b6af0db28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}

export default Gallery;
