import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Section*/}
      <div className=" bg-black text-gega-grey ">
        {/* Footer Container*/}
        <div className=" container flex flex-col md:flex-row px-10 lg:px-0 pb-8">
          {/* Left*/}
          <div className=" basis-1/3 ">
            <a
              href="#"
              className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
              GEGA
            </a>
            <p className="text-sm mt-2">2022 IhaSoft No &copy; Copyright</p>
          </div>
          {/* Middle*/}
          <div className=" basis-1/3">
            <h2 className=" mb-2 text-gega-red">LINKS</h2>
            <div className=" grid grid-cols-5 gap-2 uppercase">
              <a
                className=" col-span-2 hover:text-gega-melon duration-500"
                href="#">
                Movies
              </a>
              <a
                className=" col-span-2 hover:text-gega-melon duration-500"
                href="#">
                Celebrities
              </a>
              <a
                className=" col-span-2 hover:text-gega-melon duration-500"
                href="#">
                Blog
              </a>
              <a
                className=" col-span-2 hover:text-gega-melon duration-500"
                href="#">
                News
              </a>
              <a
                className=" col-span-2 hover:text-gega-melon duration-500"
                href="#">
                About
              </a>
            </div>
          </div>
          {/* Right*/}
          <div className=" basis-1/3 ">
            <h2 className=" mb-2 text-gega-red">Follow Us</h2>
            <form className=" flex ">
              <input
                className=" py-1 px-2 bg-transparent border border-gega-red text-xs outline-none "
                type="text"
                placeholder="Type Your Email"
              />
              <button className="py-1 px-2 bg-transparent border border-gega-red bg-gega-red font-gemunu uppercase">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
