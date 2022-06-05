import { IconButton, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p="5" align="flex-end">
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
        isRound
      />
    </VStack>
  );
};

export default Header;
