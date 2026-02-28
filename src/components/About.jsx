import React from "react";

function About() {
  return (
    <div className="font-BG flex-col mt-20">
      <div className="font-BG text-2xl lg:text-3xl 2xl:text-4xl relative ">
        <div>Our Trusted</div>
        <div className="flex relative w-fit">
          <span className="font-youngSerif text-3xl relative after:absolute after:w-full after:h-[4px] z-[3000] after:bg-orangish after:bottom-[7px] after:left-0 after:z-[-20] lg:text-4xl 2xl:text-5xl">
            Clients
          </span>
          <div className="absolute left-0 top-[-50px] -z-10 m-auto size-30 xl:size-45 2xl:size-55 rounded-full bg-[hsl(20_100%_49%/.5)] opacity-20 blur-[20px] xl:top-[-30px] 2xl:top-[-60px]"></div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="ImgDiv xl:w-[50%] rounded-full">
          <div className="size-[300px] border-orangish/50 border-2 border-dashed rounded-full p-10 relative">
            {/* border-gray-300/80 */}
            <div className="w-full h-full relative rounded-full ">
              <div className="p-8 border-2 w-full h-full border-orangish/10 rounded-full relative">
                {/* border-gray-200/70 */}
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="absolute left-1/2 -translate-1/2 top-1/2 -z-10 m-auto size-50 xl:size-45 2xl:size-55 rounded-full bg-[hsl(20_100%_49%/.7)] opacity-20 blur-[20px] xl:top-[-30px] 2xl:top-[-60px]"></div>
              </div>
              <img
                className="size-[40px] rounded-full absolute top-4 right-4 md:top-7 md:right-7 object-cover"
                src="https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>{" "}
            <img
              className="size-[55px] rounded-full absolute bottom-4.5 right-4.5 object-cover"
              src="https://plus.unsplash.com/premium_photo-1661284821299-f5e8b3c97242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="size-[60px] rounded-full absolute top-2.75 left-2.75 object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsaWVudHN8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <img
              className="size-[70px] rounded-full object-cover absolute bottom-2.25 left-2.25"
              src="https://plus.unsplash.com/premium_photo-1670884441757-d513d69fb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsaWVudHN8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
        <div className="TextDiv mt-7 flex flex-col text-center px-5 w-full mb-5">
          <div className="flex items-center justify-center flex-col w-full">
            <h1 className="font-[700] text-3xl text-[#26292e]/90 ">
              We Believe In Doing
            </h1>

            <p className="mt-2 text-[#26292e]/60 text-[14px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              minima eveniet voluptas aperiam impedit tempora enim deserunt
              veritatis?
            </p>
          </div>
          <div className="flex w-full justify-center items-center bg-orangish/10 p-2 rounded-lg mt-2">
            <div className="flex flex-col w-full items-center justify-center">
              {/* <p className="text-[#26292e]/90 list-none flex flex-col items-center flex-1">
                We Believe In
              </p>
              <div className="w-full h-[1px] bg-[#26292e]/10 mt-1 mb-2"></div> */}
              <div className="flex w-full items-center justify-center gap-x-2">
                <div className=" flex-1 text-[14px] py-1 px-2 text-white bg-orangish/80 rounded-lg">
                  Quality
                </div>
                <div className=" flex-1 text-[14px] py-1 px-2 text-white bg-orangish/80 rounded-lg">
                  Reliability
                </div>
                <div className=" flex-1 text-[14px] py-1 px-2 text-white bg-orangish/80 rounded-lg">
                  Performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
