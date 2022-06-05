import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import Note from "./Note";

const NotesList = () => {
  const [notes, setNotes] = useState([
    { content: "This is content for note 1", date: "20/01/2022" },
    { content: "This is content for note 2", date: "20/02/2022" },
    { content: "This is content for note 3", date: "22/03/2023" },
  ]);
  return (
    <Flex justify="center">
      <SimpleGrid columns={[1, 2, 3]} pt="5" spacing="5" maxW="1000px">
        {notes.map((note, index) => {
          return <Note key={index} date={note.date} content={note.content} />;
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default NotesList;
