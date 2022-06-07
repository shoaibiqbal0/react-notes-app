import { IconButton, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <VStack p="5" align="flex-end">
        <IconButton
          icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound
        />
      </VStack>
      <VStack pb="20" pt="10" align="center">
        <Text
          fontSize="6xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.400, purple.400, red.400)"
          bgClip="text"
        >
          Notes
        </Text>
      </VStack>
    </div>
  );
};

export default Header;
