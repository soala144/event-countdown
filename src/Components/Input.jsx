import React from "react";

const Input = () => {
  return (
    <form className="flex w-3/4 flex-col items-center">
      <img src="/img/image.png" alt="" />
      <label htmlFor="name">Name</label>
      <input type="text" />
      <label htmlFor="event">Event</label>
      <input type="text" />
      <label htmlFor=""></label>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" />
      </div>
    </form>
  );
};

export default Input;
