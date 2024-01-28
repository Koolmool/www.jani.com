import React from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaDatabase, FaLock, FaCog } from "react-icons/fa";

const BackendFunctions = () => {
  return (
    <Box w="100%">
      <Heading as="h2" size="lg" mb={2}>
        Backend Functionalities
      </Heading>
      <List spacing={2}>
        <ListItem>
          <ListIcon as={FaDatabase} color="green.500" />
          Database Management
        </ListItem>
        <ListItem>
          <ListIcon as={FaLock} color="blue.500" />
          Security and Authentication
        </ListItem>
        <ListItem>
          <ListIcon as={FaCog} color="purple.500" />
          Automated Task Scheduling
        </ListItem>
      </List>
    </Box>
  );
};

export default BackendFunctions;
