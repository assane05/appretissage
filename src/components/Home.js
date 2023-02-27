import React from "react";

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Bonjour {props.name}</h1>
    </div>
  );
};

export default Home;
