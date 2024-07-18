import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdNoteAlt } from "react-icons/md";
import { deleteNote } from "../features/noteSlice";
import UpdateTask from "../components/UpdateTask";
import { Helmet } from "react-helmet-async";
import { formatDistance } from "date-fns";

const TaskView = () => {
  const { notes } = useSelector((state) => state.note);
  const [editedName, setEditedName] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedId, setEditedId] = useState("");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleUpdate = (note) => {
    setVisible(note);
    setEditedName(note.name);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
    setEditedId(note.id);
  };

  if (visible) {
    return (
      <UpdateTask
        editedName={editedName}
        editedTitle={editedTitle}
        editedDescription={editedDescription}
        editedId={editedId}
        setEditedName={setEditedName}
        setEditedTitle={setEditedTitle}
        setEditedDescription={setEditedDescription}
        setVisible={setVisible}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>TaskView</title>
      </Helmet>
      <div className=" grid grid-cols-3 gap-5 container px-5 pt-7">
        {notes?.map((note) => (
          <div key={note.id} className=" bg-yellow-600 p-5 rounded">
            <h2 className=" text-xl text-white font-sans font-bold">
              {note.name}
            </h2>
            <h3 className=" text-lg text-white font-sans font-semibold">
              {note.title}
            </h3>
            <p className=" text-base text-white font-sans">
              {note.description}
            </p>
            <span className=" text-sm font-medium">
              {formatDistance(note.createAt, new Date(), { addSuffix: true })}
            </span>
            <div className=" flex justify-end gap-2 mt-3">
              <button
                onClick={() => handleUpdate(note)}
                className=" flex items-center gap-1 bg-violet-600 px-3 py-1 text-white font-semibold font-sans rounded"
              >
                Update
                <span>
                  <MdNoteAlt />
                </span>
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className=" flex items-center gap-1 bg-red-500 px-3 py-1 text-white font-semibold font-sans rounded"
              >
                Delete
                <span>
                  <RiDeleteBin2Fill />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskView;
