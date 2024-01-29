import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const WebFunctionality = () => {
  return (
    <Box w="100%" mt={6}>
      <Heading as="h2" size="lg" mb={2}>
        Web Functionalities
      </Heading>
      <List spacing={3}>
        <ListItem>AI Chat Responses: Interact with an AI to get responses to user queries.</ListItem>
        <ListItem>Backend Function Management: Overview of backend services like database management, security, and task scheduling.</ListItem>
        <ListItem>AI Information Provision: Displays milestones and achievements related to AI development.</ListItem>
        <ListItem>Backend Change Request Submission: Allows users to submit requests for backend changes.</ListItem>
        <ListItem>AI Code Generation: Generate code snippets based on user input.</ListItem>
        <ListItem>Server Requirements Display: Lists the necessary server infrastructures for the web application.</ListItem>
      </List>
    </Box>
  );
};

export default WebFunctionality;
