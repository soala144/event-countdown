import React from "react";
import Home from "./Components/Home";

const App = () => {
  return (
    <div
      className="min-h-screen flex-col flex items-center justify-center bg-center bg-cover bg-no-repeat"
      style={{ background: "url('/image.png'), #0F0E0E" }}
    >
      <Home />
    </div>
  );
};

export default App;
