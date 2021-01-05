import React from "react";
import PlantCycle from "./components/PlantCycle";
import Timeline from "./components/Timeline";
import { ContextProvider } from "./providers/context";
import { useAppContext } from "./providers/context";
import { State } from "./providers/context"
// import PlantEvent from "./components/PlantEvent";

import "./App.css";

const cycleData = [
  {
    plantName: "hrasok",
    soakLength: 1,
    germinationLength: 1,
    growLength: 2,
  },
  {
    plantName: "leak",
    soakLength: 1,
    germinationLength: 2,
    growLength: 3,
  },
];

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Timeline />


      </div>
    </ContextProvider>
  );
}

export default App;
