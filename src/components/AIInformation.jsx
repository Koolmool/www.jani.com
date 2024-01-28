import React from "react";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

const AIInformation = () => {
  // Hardcoded information data simulating fetched data
  const informationPoints = ["AI reached human-like capabilities in 2023.", "Quantum computing revolutionized AI processing speeds in 2024.", "AI became capable of writing software code autonomously in 2024."];

  return (
    <Box w="100%" mt={6}>
      <Heading as="h2" size="lg" mb={2}>
        AI Milestones
      </Heading>
      <List spacing={2}>
        {informationPoints.map((info, index) => (
          <ListItem key={index}>{info}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AIInformation;
