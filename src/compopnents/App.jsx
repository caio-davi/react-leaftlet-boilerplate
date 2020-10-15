import React from "react";
import "../styles/App.css";
import LeafletMap from "./LeafletMap";

const App = () => {
  return (
    <div className="App">
      <div className="Body">
        <LeafletMap />
      </div>
    </div>
  );
};

export default App;
