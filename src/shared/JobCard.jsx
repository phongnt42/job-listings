import React from "react";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ViewOffIcon } from "@chakra-ui/icons";

const JobCard = () => {
  return (
    <Box border="1px solid #ffffff" padding="24px" borderRadius="8px">
      <Flex justifyContent="space-between">
        <Flex direction="column">
          <Heading as="h3" size="md">
            Senior Web Developer
          </Heading>
          <Text color="#94a3b8">Netflix</Text>
          <Text color="#94a3b8">Remote</Text>
        </Flex>
        <Flex>
          <Button
            bgColor="#020617"
            borderRadius="100%"
            width="40px"
            height="40px"
            _hover={{
              backgroundColor: "#1E313B",
            }}
          >
            <ViewOffIcon color="white" />
          </Button>
          <Button
            bgColor="#020617"
            borderRadius="100%"
            width="40px"
            height="40px"
            _hover={{
              backgroundColor: "#1E313B",
            }}
          >
            <ViewOffIcon color="white" />
          </Button>
        </Flex>
      </Flex>
      <Flex>
        <Flex
          width="80px"
          bgColor="#1e293b"
          justifyItems="space-between"
          paddingX="10px"
          borderRadius="10px"
        >
         <Text fontSize='sm'>$200,000</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default JobCard;
