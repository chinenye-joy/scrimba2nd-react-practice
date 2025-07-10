import React from "react";

const Ternary = () => {
//   const isGoingOut = false;

  const [isGoingOut, setIsGoingOut] = React.useState(true)
//   const result = () => setIsGoingOut(!isGoingOut)
function result() {
    setIsGoingOut((prevstate) => !prevstate)
}

//   const answer = isGoingOut === true ? "Yes" : "No";

  return (
    <main>
      <h1>Do I feel like going out tonight?</h1>
      <button onClick={result} aria-label={"Click to change it "}>{isGoingOut ? "Yes" : "No"}</button>
      {/* <button>{isGoingOut ? "Yes" : "No"}</button> */}
    </main>
  );
};



export default Ternary;
