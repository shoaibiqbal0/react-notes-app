import {
  Box,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

const Note = () => {
  return (
    <div>
      <Box
        maxW="sm"
        minH="sm"
        borderWidth="1px"
        overflow="hidden"
        borderRadius="lg"
      >
        {/* Note Header */}
        <VStack>
          <Text p="3" fontWeight="semibold">
            Title
          </Text>
        </VStack>
        {/* Note Content */}
        <VStack>
          <Text w="100%" pl="5" minH="280px">
            This is content
          </Text>
        </VStack>
        {/* Note Footer */}
        <HStack p="3">
          <Text>This is date</Text>
          <Spacer />
          <IconButton
            isRound="true"
            bg="transparent"
            icon={<RiDeleteBin2Fill />}
          />
        </HStack>
      </Box>
    </div>
  );
};

export default Note;
