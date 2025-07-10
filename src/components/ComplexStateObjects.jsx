import { useState } from "react";
import userimage from "../images/user-image.png";
import Star from "./Star";


const ComplexStateObjects = () => {
  const [contact, setContact] = useState({
    firstName: "Chinenye",
    lastName: "Anyim",
    phone: "08108244730",
    email: "anyimjoy01@gmail.com",
    isFavourite: false,
  });

  
  function toggleFavourite() {
    setContact((preContact) => {
      return {
        ...preContact,
        isFavourite: !preContact.isFavourite,
      };
    });
  }
  return (
    <main className="flex flex-col justify-center items-center  h-screen mb-20 bg-emerald-600 text-teal-950">
      <article className="bg-slate-50 w-75 py-13 px-9">
        <img
          className="w-28 mx-auto mt-2 mb-2 rounded-full"
          src={userimage}
          alt="an avatar image"
        />
        <div className="">
          < Star isFilled={contact.isFavourite} handleClick={toggleFavourite}/>

          <h2 className="text-2xl font-bold ">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="text-2xl">{contact.phone}</p>
          <p className="text-2xl">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default ComplexStateObjects;
