import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Note from "./Note";

const NotesList = () => {
  return (
    <Flex justify="center">
      <SimpleGrid columns={[1, 2, 3]} pt="5" spacingY="5" maxW="1000px">
        <Note />
        <Note />
        <Note />
        <Note />
      </SimpleGrid>
    </Flex>
  );
};

export default NotesList;
