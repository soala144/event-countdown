import React, { useReducer } from "react";
import Home from "./Components/Home";
import Input from "./Components/Input";
const initialState = {
  // "start", "input", "countdown" "end"
  status: "start",
};
function reducer(state, action) {
  switch (action.type) {
    case "getData":
      return { ...state, status: "input" };

    default:
      throw new Error("action is unknown");
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status } = state;
  return (
    <div
      className="min-h-screen [background-size: 50%_auto] flex-col flex items-center justify-center bg-center bg-no-repeat"
      style={{ background: "url('/image.png'), #0F0E0E" }}
    >
      {status === "start" && <Home dispatch={dispatch} />}
      {status === "input" && <Input />}
    </div>
  );
};

export default App;
