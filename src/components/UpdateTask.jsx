import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNotes } from "../features/noteSlice";

const UpdateTask = ({
  editedName,
  editedTitle,
  editedDescription,
  editedId,
  setVisible,
  setEditedDescription,
  setEditedTitle,
  setEditedName,
}) => {
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);

  const handleUpdates = () => {
    const updatesValue = {
      id: editedId,
      name: editedName,
      title: editedTitle,
      description: editedDescription,
      createAt: new Date().toString(),
    };
    dispatch(updateNotes(updatesValue));
    setVisible(false);
  };

  return (
    <>
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
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <input
              type="text"
              placeholder="title"
              className=" p-2 rounded outline-none"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              maxLength={400}
              rows={5}
              placeholder="description"
              className=" p-2 rounded resize-none outline-none"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>

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
            <div className=" text-center">
              <button
                disabled={!checkbox}
                onClick={handleUpdates}
                className={` bg-rose-500 ${
                  checkbox ? "cursor-pointer" : "cursor-not-allowed"
                } mt-1 px-4 py-1 rounded text-white text-base font-mono`}
              >
                Updates notes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
