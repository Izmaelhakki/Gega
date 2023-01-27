import React from "react";

function Header() {
  return (
    <div>
      {/* Header Ana özellikleri */}
      <div className="bg-black py-12 text-gega-grey font-gemunu uppercase">
        {/* Header Container */}
        <div className="container flex items-center justify-between space-x-16">
          {/* Logo */}
          <a href="#" className="bg text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
            GEGA
          </a>
          {/* Navigation */}
          <nav className="flex justify-between flex-1">
            {/* Menu */}
            <div className="flex items-center text-lg space-x-8">
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500">
                Movies
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500">
                Celebrities
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500">
                Blog
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500">
                News
              </a>
              <a
                href="#"
                className="hover:text-gega-melon transition duration-500">
                About
              </a>
            </div>
            {/* Login Area */}
            <div className="flex items-center space-x-8">
              {/* Search Area */}
              <form>
                <div className="group border-r px-4 mx4 py-1 border-gega-red">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-transparent border-b border-gega-red focus:outline-none w-44 opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                  <button className="-ml-4 group-hover:ml-0 transition duration-500 ">
                    <i className="fas fa-search group-hover:text-gega-red transition duration-500"></i>
                  </button>
                </div>
              </form>
              {/* Signup Area */}
              <div className="flex items-center space-x-8 text-lg">
                <a href="#">Login</a>
                <a
                  href="#"
                  className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500">
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
