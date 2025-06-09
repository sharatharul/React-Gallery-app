// src/App.js
import React from "react";
import Gallery from "./Components/Gallery";
import images from "./Components/data";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Photo Gallery</h1>
      <Gallery images={images} />
    </div>
  );
};

export default App;
