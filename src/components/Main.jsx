import React, { useState } from "react";
import NotesList from "./NotesList";
import Search from "./Search";

const Main = () => {
  const [notes, setNotes] = useState([
    { content: "Hello", date: "10/05/2022" },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNewNote = (data) => {
    setNotes((previousItems) => {
      return [...previousItems, data];
    });
  };

  const deleteNote = (data) => {
    setNotes((previousItems) => {
      return previousItems.filter((item, index) => {
        return index !== data;
      });
    });
  };

  return (
    <div>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => {
          return note.content.toLowerCase().includes(searchText);
        })}
        deleteNote={deleteNote}
        addNewNote={addNewNote}
      />
    </div>
  );
};

export default Main;
