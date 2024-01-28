import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

const ChatHistory = ({ additionalMessages }) => {
  const chatMessages = [
    { id: 1, text: "How's the weather today?" },
    { id: 2, text: "It's sunny with a mild breeze, perfect for a walk." },
    { id: 3, text: "Set a reminder for my meeting tomorrow at 10 AM." },
    { id: 4, text: "Reminder set for your meeting tomorrow at 10 AM." },
  ];

  return (
    <VStack spacing={3} alignItems="flex-start" w="100%" p={4} mb={4} bg="gray.100" borderRadius="md">
      {[...chatMessages, ...additionalMessages].map((msg) => (
        <Box key={msg.id} w="100%">
          <Text fontSize="md">{msg.text}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ChatHistory;
