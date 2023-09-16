import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";

const JobListings = () => {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="2xl" noOfLines={1}>
          Job Listings
        </Heading>
        <Box
          paddingX="16px"
          paddingY="8px"
          fontWeight={500}
          cursor="pointer"
          border="1px solid #1E293B"
          borderRadius= "10px"
          fontSize="14px"
          _hover={{
            backgroundColor: "#1E313B",
          }}
        >
          Create Listing
        </Box>
      </Flex>
    </div>
  );
};

export default JobListings;
