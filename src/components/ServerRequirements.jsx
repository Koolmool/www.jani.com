import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ServerRequirements = () => {
  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Server Requirements
      </Heading>
      <Text>The web application requires the following servers to function properly:</Text>
      <Text>- Web Server (e.g., Nginx, Apache)</Text>
      <Text>- Database Server (e.g., PostgreSQL, MySQL)</Text>
      <Text>- Cache Server (e.g., Redis, Memcached)</Text>
      <Text>- Backend API Server (e.g., Node.js, Django)</Text>
    </Box>
  );
};

export default ServerRequirements;
