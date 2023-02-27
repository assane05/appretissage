import React from "react";

function Event() {
  function clickHandler() {
    console.log("click");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Event;
