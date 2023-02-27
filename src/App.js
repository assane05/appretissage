import "./App.css";
import Home from "./components/Home";
import { Component } from "react";
import StatePage from "./components/StatePage";
import SetStatePage from "./components/SetStatePage";
import Event from "./components/Event";
import UserForm from "./components/userForm";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import Form from "./components/Form";
import ClickCounter from "./components/ClickCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      {/* <Form /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <UserForm /> */}
      {/* <Event /> */}
      {/* <SetStatePage /> */}
      {/* <StatePage /> */}
      {/* <Home name="Assane Gueye" />
        <Home name="pathe Gueye" />
        <Home name="Demba Gueye" /> */}
    </div>
  );
}

export default App;
