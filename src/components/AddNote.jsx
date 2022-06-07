import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = (props) => {
  const toast = useToast();
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
  };

  const handleClick = () => {
    if (noteContent.content === "") {
      toast({
        title: "Note field is empty.",
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    } else {
      props.addNote(noteContent);
      setNoteContent({
        content: "",
        date: "",
      });
    }
  };

  return (
    <Box
      bg={useColorModeValue("blue.200", "blue.900")}
      minW="250px"
      borderWidth="1px"
      overflow="hidden"
      borderRadius="lg"
      border="none"
      boxShadow="lg"
    >
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
          placeholder="Add a note.."
          border="none"
          focusBorderColor="none"
        />
      </VStack>
      {/* Note Footer */}
      <HStack p="3">
        <Spacer />
        <IconButton
          onClick={handleClick}
          isRound="true"
          icon={<FaPlus />}
          variant="ghost"
        />
      </HStack>
    </Box>
  );
};

export default AddNote;
