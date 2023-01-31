import React from "react";

function InterSection() {
  return (
    <>
      {/* Matrix Section*/}
      <div className="bg-gega-white mb-24">
        {/* Matrix Section Container*/}
        <div className="pl-10 lg:pl-0 container flex items-center justify-center relative">
          {/* Left Content*/}
          <div className=" hidden md:block md:basis-1/3 lg:basis-1/2 ">
            <img
              src="../../public/images/matrix.png"
              alt=""
              className="lg:absolute lg:bottom-0"
            />
          </div>
          {/* Right Content*/}
          <div className="md:basis-1/3 lg:basis-1/2 w-3/4 md:w-full">
            {/* Right Content Container*/}
            <div className="flex flex-col justify-center py-10">
              <h3 className="tracking-wider text-gega-melon">
                ACTION,DRAMA,THRILLER
              </h3>
              <h2 className="mb-2">Matrix Reloaded</h2>
              <p className="text-2 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente quasLorem ipsum dolor sit amet consectetur adipisicing
                elit. Sapiente quas
              </p>
              <h3 className="tracking-wider text-gega-red">
                8 Wins 34 Nominations
              </h3>
            </div>
          </div>
          {/* Oldie Goldie*/}
          <div className=" left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center">
            <p className="font-gemunu uppercase font-bold text-xl text-gega-red -rotate-45">Oldie & Goldie</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default InterSection;
