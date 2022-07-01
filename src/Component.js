import React from "react";

const Component = (props) => {
  return (
    <div className="w-56 h-20 flex text-text">
      <img
        src={require("./pictures/time.png")}
        className="h-16 mr-4 mt-2"
      ></img>
      <div className="text-left">
        <h1 className="text-lg">MAURIS NON</h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Component;
