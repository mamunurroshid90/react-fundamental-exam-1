import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className=" container px-7 h-screen flex justify-center items-center">
        <div className="  bg-slate-300 w-[350px] px-10 py-7 rounded">
          <h3 className=" text-center text-2xl font-bold mb-4">Contact form</h3>
          <form className=" flex flex-col gap-5">
            <input
              type="text"
              placeholder="name"
              className=" p-2 rounded outline-none"
            />
            <input
              type="email"
              placeholder="email"
              className=" p-2 rounded outline-none"
            />
            <input
              type="password"
              placeholder="password"
              className=" p-2 rounded outline-none"
            />
            <button
              className=" bg-black text-white text-base font-bold px-4 py-1 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
