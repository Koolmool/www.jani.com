import React, { useState } from "react";
import { VStack, Input, Button, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import * as Icons from "react-icons/fa";

const BackendChangeRequest = ({ onBackendChange }) => {
  const [backendChange, setBackendChange] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    onBackendChange(backendChange);
    setBackendChange("");
    toast({
      title: "Backend Change Request",
      description: "Your backend change request has been submitted.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack mt={4} w="100%">
      <FormControl>
        <FormLabel htmlFor="backend-change">Request a backend change:</FormLabel>
        <Input id="backend-change" value={backendChange} onChange={(e) => setBackendChange(e.target.value)} placeholder="Describe the backend change here" />
      </FormControl>
      <Button leftIcon={<Icons.FaCloudUpload />} colorScheme="green" onClick={handleSubmit}>
        Submit Backend Change
      </Button>
    </VStack>
  );
};

export default BackendChangeRequest;
