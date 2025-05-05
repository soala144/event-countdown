import React from "react";

const Home = ({ dispatch }) => {
  return (
    <div>
      <h1 className="text-white bold text-8xl uppercase">Countdown</h1>
      <p className="my-10 text-2xl text-white text-center">
        Save the date; Anticipate the Event
      </p>
      <button
        className="uppercase py-2 px-3.5 text-white rounded-xl ml-52 bg-primary"
        onClick={() => dispatch({ type: "getData" })}
      >
        Start the count
      </button>
    </div>
  );
};

export default Home;
