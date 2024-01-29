import React from "react";
import { Box, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="20px" fontWeight="bold">
        404: The page you are looking for isn’t here
      </Text>
    </Box>
  );
};

export default NotFoundPage;
