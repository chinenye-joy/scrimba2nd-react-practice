import { useState } from "react";

const ComplexStateArrays = () => {
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = ["🥙🥯", "🥧🥮", "🍩💐", "🥕🌴", "🧅🍀"];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThings() {
    setMyFavoriteThings((preFavThings) => [...preFavThings, allFavoriteThings[preFavThings.length] ]);
  }
  return (
    <main className="p-10 ">
      <button className="bg-indigo-950 text-white py-3 px-6 rounded-4xl text-base" onClick={addFavoriteThings}>Add item</button>
      <section>{thingsElements}</section>
    </main>
  );
};

export default ComplexStateArrays;
