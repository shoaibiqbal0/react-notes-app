import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = () => {
  const [notes, setNotes] = useState([
    { content: "This is content for note 1", date: "20/01/2022" },
    { content: "This is content for note 2", date: "20/02/2022" },
    { content: "This is content for note 2", date: "20/02/2022" },
  ]);
  return (
    <Flex justify="center">
      <SimpleGrid columns={[2, 2, 3]} spacing="5" mx="2">
        {notes.map((note, index) => {
          return <Note key={index} date={note.date} content={note.content} />;
        })}
        <AddNote />
      </SimpleGrid>
    </Flex>
  );
};

export default NotesList;
