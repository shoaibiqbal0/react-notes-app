import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = (props) => {
  const [noteContent, setNoteContent] = useState({
    content: "",
    date: "",
  });

  const handleChange = (event) => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    const { name, value } = event.target;
    setNoteContent((previousItems) => {
      return {
        ...previousItems,
        [name]: value,
        date: date,
      };
    });
    console.log(noteContent.date);
  };

  const handleClick = () => {};

  return (
    <Box
      bg={useColorModeValue("gray.100", "blue.900")}
      minW="250px"
      borderWidth="1px"
      overflow="hidden"
      borderRadius="lg"
    >
      <form>
        {/* Note Content */}
        <VStack>
          <Textarea
            onChange={handleChange}
            mt="5"
            minH="180px"
            maxW="220px"
            resize="none"
            name="content"
            value={noteContent.content}
            placeholder="Add note.."
          />
        </VStack>
        {/* Note Footer */}
        <HStack p="3">
          <Spacer />
          <IconButton
            onClick={handleClick}
            isRound="true"
            bg="transparent"
            icon={<FaPlus />}
          />
        </HStack>
      </form>
    </Box>
  );
};

export default AddNote;
