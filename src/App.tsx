import React from "react";
import Live from "./components/Live";
import Timeline from "./components/Timeline";
import { AppContextProvider } from "./providers/context";
import { LiveContextProvider } from "./providers/liveContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Timeline />
      </AppContextProvider>
      <LiveContextProvider>
        <Live />
      </LiveContextProvider>
    </div>
  );
}

export default App;
