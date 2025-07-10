import React from "react";

const Form = () => {
  function signUpForm(formData) {
   const data = Object.fromEntries(formData)
   const favoriteData = formData.getAll("favouriteFoods")
  const allData = {
    ...data,
    favouriteFoods:favoriteData
   
  }
   console.log(allData)
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const employmentStatus = formData.get("employementStatus");
    // const favColor = formData.get("favColor");
    // console.log(favColor);
  }
  return (
    <section className="p-3 md:p-10 bg-slate-100 min-h-screen flex justify-center items-center">
      <form
        action={signUpForm}
        className="bg-slate-500 w-full max-w-lg p-8 md:p-10 rounded-lg shadow-lg"
      >
        <h1 className="text-center text-white text-xl md:text-2xl mb-6 font-bold">
          SignUp Form
        </h1>

        <label htmlFor="email" className="text-white block mb-2">
          Email:
        </label>
        <input
          className="w-full border border-slate-300 p-3 mb-4 rounded-full  "
          type="email"
          // defaultValue="joy@gmail.com"
          id="email"
          name="email"
          placeholder="joy@gmail.com"
        />

        <label htmlFor="password" className="text-white block mb-2">
          Password:
        </label>
        <input
          className="w-full border border-slate-300 p-3 mb-4 rounded-full"
          type="password"
          // defaultValue="2443553"
          id="password"
          name="password"
        />

        <label htmlFor="description" className="text-white block mb-2">
          Description:
        </label>
        <textarea
          className="w-full border border-slate-300 p-3 mb-4 rounded-lg  "
          name="description"
          id="description"
          // defaultValue="This is a description"
          rows="4"
          placeholder="Write something..."
        ></textarea>
        <fieldset className="border border-slate-300 p-4 mb-6 ">
          <legend className="font-bold">Employment Status:</legend>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="radio"
              name="employmentStatus"
              value="Unemployed"
              className="accent-blue-500"
            />
            Unemployed
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="radio"
              name="employmentStatus"
              value="employed"
              className="accent-blue-500"
            />
            Employed
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="radio"
              name="employmentStatus"
              value="Part-time"
              className="accent-blue-500"
            />
            Part-time
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="Full-time"
              className="accent-blue-500"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset className="border border-slate-300 p-4 mb-12">
          <legend className="font-bold">Favorite foods:</legend>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="checkbox"
              name="favourite food"
              value="Beans"
              className="accent-blue-500"
            />
           Beans
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="checkbox"
              name="favourite food"
              value="Rice"
              className="accent-blue-500"
            />
           Rice
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="checkbox"
              name="favorite food"
              value="plantain"
              className="accent-blue-500"
            />
          Plantain
          </label>
          <label className="text-white flex items-center mb-4 gap-2">
            <input
              type="checkbox"
              name="favourite"
              value="soup"
              defaultChecked={true}
              className="accent-blue-500"
            />
           Soup
          </label>
        </fieldset>

        <label className="border border-slate-300 py-3 px-5 font-bold ml-3 " htmlFor="favColor">What is your favorite color: 
        <select id="favColor" name="favColor">
          <option value="" disabled>
            Choose a color
          </option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
        </select>
        </label>
        <button
          type="submit"
          className="w-full text-white border border-slate-300 mt-7 py-3 rounded-full font-semibold hover:bg-slate-400 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
