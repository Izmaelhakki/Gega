import React from "react";

function MoviesSection() {
  return (
    <div>
      {/* Movies Section */}
      <div className="py-24 bg-black">
        {/* Movies Content */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* Left Content */}
          <div className="basis-2/3">
            {/* Title */}
            <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
              <h2 className="text-gega-red ">
                <a href="#">Latest</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Popular</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Best</a>
              </h2>
            </div>
            {/* İmages Container */}
            <div className="flex flex-wrap">
              {/* İmage 1 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv1.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 1 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 1 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 2 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv2.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 2 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 2 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 3 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv3.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 3 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 3 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 4 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv4.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 4 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 4 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 5 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv5.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 5 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 5 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 6 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="../../public/images/mv6.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 6 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 6 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 7 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                <img
                  src="../../public/images/mv1.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 7 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 7 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* İmage 8 */}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                <img
                  src="../../public/images/mv2.jpg"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* İmage 8 Detail Container */}
                <div className="absolute px-6 bottom-8 ">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  {/* İmage 8 İcons Container */}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <a
                      className="hover:text-gega-red"
                      href="#">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="basis-1/3 pl-10 lg:pl-0">
            {/* Title */}
            <h2 className="text-gega-grey mb-8">Hot News</h2>
            {/* News Container */}
            <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
              {/*İtems*/}
              <div className="flex items-center group basis-3/4 md:basis-1/2 ">
                {/*News Image Container*/}
                <div className="basis-1/3 h-full">
                  <img
                    src="../../public/images/new1.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/*News Detail*/}
                <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500 ">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    On NOW 01 2022
                  </p>
                </div>
              </div>
              {/*İtems*/}
              <div className="flex items-center group basis-3/4 md:basis-1/2 ">
                {/*News Image Container*/}
                <div className="basis-1/3 h-full">
                  <img
                    src="../../public/images/new2.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/*News Detail*/}
                <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500 ">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    On NOW 01 2022
                  </p>
                </div>
              </div>
              {/*İtems*/}
              <div className="flex items-center group basis-3/4 md:basis-1/2 ">
                {/*News Image Container*/}
                <div className="basis-1/3 h-full">
                  <img
                    src="../../public/images/new3.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/*News Detail*/}
                <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500 ">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    On NOW 01 2022
                  </p>
                </div>
              </div>
              {/*İtems*/}
              <div className="flex items-center group basis-3/4 md:basis-1/2 ">
                {/*News Image Container*/}
                <div className="basis-1/3 h-full">
                  <img
                    src="../../public/images/new4.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/*News Detail*/}
                <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500 ">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    On NOW 01 2022
                  </p>
                </div>
              </div>
              {/*İtems*/}
              <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex ">
                {/*News Image Container*/}
                <div className="basis-1/3 h-full">
                  <img
                    src="../../public/images/new5.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                </div>
                {/*News Detail*/}
                <div className="pl-4 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500 ">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente quas
                  </p>
                  <p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">
                    On NOW 01 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesSection;
