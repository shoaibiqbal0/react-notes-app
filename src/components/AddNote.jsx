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
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddNote = (props) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "blue.900")}
      minW="250px"
      borderWidth="1px"
      overflow="hidden"
      borderRadius="lg"
    >
      {/* Note Content */}
      <VStack>
        <Textarea mt="5" minH="180px" maxW="220px" resize="none" />
      </VStack>
      {/* Note Footer */}
      <HStack p="3">
        <Spacer />
        <IconButton isRound="true" bg="transparent" icon={<FaPlus />} />
      </HStack>
    </Box>
  );
};

export default AddNote;
