import NavBar from "./NavBar";
import "./App.css";
import Component from "./Component";
import Component2 from "./Component2";
//import { Card } from "@material-ui/core";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <img
          src={require("./pictures/p1.png")}
          className="object-scale-down h-1/3 w-1/3 float-right flex mr-48 py-10"
        ></img>
        <div className="ml-24 text-text">
          <h1 className="py-10  text-8xl">LOREM ISPUM</h1>
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-3xl my-10">
            FA-TI CONT GRATUIT
          </button>
        </div>
        <img src={require("./pictures/c1.png")} className="mt-24 ml-96"></img>
        <img
          src={require("./pictures/c2.png")}
          className="shrink w-1/12 absolute mt-12 static"
        ></img>
        <div className="relative mt-80 text-text">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-2xl w-80 mx-96">
              LOREM IPSUM DOLOR SIT (SERVICII)
            </h1>
            <p className="text-xs mt-3 mb-16">
              Suspendisse aliquam, quam vel rhoncus mattis, nibh metus
              pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget
              ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.
            </p>
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 pb-20">
              <Component />
              <Component />
              <Component />
              <Component />
              <Component />
              <Component />
              <Component />
              <Component />
            </div>
            <button className="bg-orange-400 text-white py-1 px-6 rounded-full">
              Button
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute mt-64">
            <img src={require("./pictures/c3.png")} className="w-auto"></img>
          </div>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-max">
            <h1 className="text-white text-3xl mb-24">CUM FUNCTIONEAZA</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-y-10 gap-x-48">
              <Component2 />
              <Component2 />
              <Component2 />
              <Component2 />
            </div>
          </div>
          <div>
            <img
              src={require("./pictures/road.png")}
              className="pt-48 shrink"
            ></img>
          </div>
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
