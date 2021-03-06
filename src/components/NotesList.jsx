import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, deleteNote, addNewNote }) => {
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
