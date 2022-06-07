import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Note = (props) => {
  const handleClick = () => {
    props.deleteNote(props.noteIndex);
  };

  return (
    <Box
      bg={useColorModeValue("yellow.100", "gray.600")}
      maxW="350px"
      maxH="250px"
      borderWidth="1px"
      overflow="hidden"
      borderRadius="lg"
      border="none"
      boxShadow="lg"
    >
      {/* Note Content */}
      <VStack>
        <Text w="100%" p="5" minH="200px">
          {props.content}
        </Text>
      </VStack>
      {/* Note Footer */}
      <HStack p="3">
        <Text>{props.date}</Text>
        <Spacer />
        <IconButton
          isRound="true"
          bg="transparent"
          icon={<RiDeleteBin2Fill onClick={handleClick} />}
        />
      </HStack>
    </Box>
  );
};

export default Note;
