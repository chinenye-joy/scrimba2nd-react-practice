import React from "react";
import Count from "./Count"

const Statepractice = () => {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function reduce() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <main className="">
        <h1>How many times will Bob say "state" in this section?</h1>
        <div className="flex flex-col gap-3 md:gap-2 items-center sm:flex-row md:flex-row p-10  text-3xl">
          <button
            className="bg-black text-white w-28 text-3xl rounded-3xl"
            aria-label="Decrease count"
            onClick={reduce}
          >
            -
          </button>
          < Count number={count} />
          {/* <h2 className="bg-black text-white w-25 text-4xl rounded-2xl text-center">
            {count}
          </h2> */}
          <button
            className="bg-black text-white w-28 text-3xl rounded-3xl"
            ariaa-label="Increase count"
            onClick={add}
          >
            +
          </button>
        </div>
      </main>
    </div>
  );
};

export default Statepractice;
