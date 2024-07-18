import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" bg-black">
        <div className=" container px-10 py-4">
          <div className=" flex justify-between items-center">
            <div className=" text-2xl text-white font-mono font-semibold">
              <Link to="/">Logo</Link>
            </div>
            <div className=" flex gap-10">
              <Link
                to="/"
                className=" text-xl text-white font-mono font-semibold"
              >
                Home
              </Link>
              <Link
                to="/taskView"
                className=" text-xl text-white font-mono font-semibold"
              >
                TaskView
              </Link>
              <Link
                to="/contact"
                className=" text-xl text-white font-mono font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
