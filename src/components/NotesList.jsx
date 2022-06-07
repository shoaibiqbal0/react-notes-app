import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

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
    <Flex justify="center">
      <SimpleGrid columns={[1, 2, 3]} spacing="5" mx="2">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              noteIndex={index}
              deleteNote={deleteNote}
              date={note.date}
              content={note.content}
            />
          );
        })}
        <AddNote addNote={addNewNote} />
      </SimpleGrid>
    </Flex>
  );
};

export default NotesList;
