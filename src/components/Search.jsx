import React from "react";
import { FaSearch } from "react-icons/fa";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Search = () => {
  return (
    <Flex justify="center" pb="10" px="10">
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input variant="filled" borderRadius="100" />
      </InputGroup>
    </Flex>
  );
};

export default Search;
