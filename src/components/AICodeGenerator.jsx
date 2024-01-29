import React, { useState } from "react";
import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";

const AICodeGenerator = ({ onCodeGenerated }) => {
  const [codeQuery, setCodeQuery] = useState("");
  const toast = useToast();

  const handleCodeGeneration = () => {
    // Simulate AI code generation with a hardcoded response
    const fakeGeneratedCode = `// Simulated generated code for query: ${codeQuery}`;
    onCodeGenerated(fakeGeneratedCode);
    toast({
      title: "Code Generated",
      description: "Your code has been generated by the AI.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box w="100%" mt={6}>
      <Input placeholder="Enter your coding task..." value={codeQuery} onChange={(e) => setCodeQuery(e.target.value)} mb={4} />
      <Button leftIcon={<FaCode />} colorScheme="pink" variant="solid" onClick={handleCodeGeneration}>
        Generate Code
      </Button>
    </Box>
  );
};

export default AICodeGenerator;
