import React from "react";
import Timeline from "./components/Timeline";
import { ContextProvider } from "./providers/context";
import "./App.css";

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
