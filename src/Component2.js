import React from "react";

const Component2 = () => {
  return (
    <div className="w-56 h-56 bg-white rounded-lg px-6 py-6 text-text">
      <img src={require("./pictures/time.png")} className="h-16 mx-auto"></img>
      <h1 className="my-1 text-orange-400">MAURIS NON</h1>
      <p className="text-xs text-gray-500">
        Pellentesque ipsum, quis blandit nisi enim eget sapien. Nulla eget
        ligula eget nunc vestibulum eleifend a vel mi. Ut nec turpis elit.
      </p>
    </div>
  );
};

export default Component2;
