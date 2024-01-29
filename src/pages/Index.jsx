import React, { useState } from "react";
import { Box, Container, Heading, VStack, Input, Button, Text, useToast, Image } from "@chakra-ui/react";
import ChatHistory from "../components/ChatHistory";
import BackendFunctions from "../components/BackendFunctions";
import AIInformation from "../components/AIInformation"; // New import for AI information component
import { FaRobot, FaServer, FaTasks, FaPlusCircle } from "react-icons/fa";
import AICodeGenerator from "../components/AICodeGenerator"; // Import AICodeGenerator component
import BackendChangeRequest from "../components/BackendChangeRequest";

const Index = () => {
  const [userQuery, setUserQuery] = useState("");
  const [aiResponses, setAiResponses] = useState([]);
  const toast = useToast();

  const handleTaskSubmission = () => {
    const newResponse = {
      id: aiResponses.length + 1,
      text: `AI Response to "${userQuery}"`, // Simulated AI response
    };
    setAiResponses([...aiResponses, newResponse]);
    toast({
      title: "Task Submitted",
      description: "Your request has been submitted to the AI.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} alignItems="flex-start">
        <Heading as="h1" size="2xl" mb={4}>
          Personal AI Assistant
        </Heading>
        <Text fontSize="lg">Your personal AI is ready to help you manage tasks and provide information.</Text>
        <ChatHistory additionalMessages={aiResponses} />
        <BackendFunctions />
        <Box w="100%" mt={6}>
          <Image src="https://images.unsplash.com/photo-1612066473428-fb6833a0d855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudHxlbnwwfHx8fDE3MDY0MTQzNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} />
          <Input placeholder="Ask your AI assistant a question or give a task..." value={userQuery} onChange={(e) => setUserQuery(e.target.value)} mb={4} />
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid" onClick={handleTaskSubmission}>
            Send to AI
          </Button>
        </Box>
        <AIInformation />
        <BackendChangeRequest onBackendChange={(change) => setAiResponses([...aiResponses, { id: aiResponses.length + 1, text: `Backend change processed: ${change}` }])} />
        <AICodeGenerator />
        <Box w="100%" mt={6}>
          <Heading as="h2" size="lg" mb={2}>
            Server Status
          </Heading>
          <Button leftIcon={<FaServer />} colorScheme="orange" variant="outline" mb={2}>
            Check Server Health
          </Button>
          <Button leftIcon={<FaTasks />} colorScheme="purple" variant="outline" mb={2}>
            View Running Tasks
          </Button>
          <Button leftIcon={<FaPlusCircle />} colorScheme="blue" variant="outline">
            Add New Server
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
