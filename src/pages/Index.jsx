import React from "react";
import { Box, Container, Heading, VStack, Input, Button, Text, useToast, Image } from "@chakra-ui/react";
import { FaRobot, FaServer, FaTasks, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTaskSubmission = () => {
    // Placeholder for task submission logic
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
        <Box w="100%">
          <Image src="https://images.unsplash.com/photo-1612066473428-fb6833a0d855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudHxlbnwwfHx8fDE3MDY0MTQzNTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={4} />
          <Input placeholder="Ask your AI assistant a question or give a task..." mb={4} />
          <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid" onClick={handleTaskSubmission}>
            Send to AI
          </Button>
        </Box>
        <Box w="100%">
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
