import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 lg:pr-96 lg:mr-96 ml-24">
        <img src={require("./pictures/logo.png")}></img>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          HOME
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          DESPRE NOI
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          CUM FUNCTIONEAZA
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          SFATURI
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          F.A.Q
        </a>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <a
          href="#"
          className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:font-bold mr-4"
        >
          CONTACT
        </a>
      </div>
      <button className="block lg:flex lg:items-center lg:w-auto bg-orange-400 hover:bg-orange-500 text-white py-1 px-6 rounded-full ">
        LOG IN
      </button>
    </nav>
  );
};

export default NavBar;
