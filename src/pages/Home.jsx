import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToNote } from "../features/noteSlice";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const dispatch = useDispatch();

  const handleAddNotes = (e) => {
    e.preventDefault();
    if ((name !== "") & (title !== "") & (description !== "")) {
      const newNotes = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createAt: new Date().toString(),
      };
      dispatch(addToNote(newNotes));
      setName("");
      setTile("");
      setDescription("");
      toast.success("Successfully added task!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Please fill up empty field!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  if (description.length >= 100) {
    alert("your letter limit is over");
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className=" bg-slate-200 flex justify-center items-center h-screen">
        <div className=" bg-stone-700 px-6 py-3 w-[350px] rounded">
          <h2 className=" text-white text-center text-2xl mb-3 font-semibold">
            Add to Notes
          </h2>
          <form className=" flex flex-col gap-3">
            <input
              type="text"
              placeholder="name"
              className=" p-2 rounded outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="title"
              className=" p-2 rounded outline-none"
              value={title}
              onChange={(e) => setTile(e.target.value)}
            />
            <textarea
              maxLength={400}
              rows={5}
              placeholder="description"
              className=" p-2 rounded resize-none outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <span className=" text-end text-white text-base">
              Character remaining: {description.length}/ 100
            </span>
            <div className=" flex items-center gap-2 py-2">
              <input
                onChange={() => setCheckbox((prev) => !prev)}
                type="checkbox"
                name=""
                id=""
                className=" h-4 w-4"
              />
              <label htmlFor="" className=" text-base text-white font-sens">
                I want to add this task
              </label>
            </div>
            <button
              disabled={!checkbox}
              onClick={handleAddNotes}
              className={` bg-rose-500 ${
                checkbox ? "cursor-pointer" : "cursor-not-allowed"
              } mt-1 px-4 py-1 rounded text-white text-base font-mono`}
            >
              Add notes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
