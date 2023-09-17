import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import ButtonNav from "../shared/ButtonNav";
import JobSearch from "./components/JobSearch";
import JobList from "./components/JobList";

const JobListings = () => {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" mb="32px">
        <Heading as="h1" size="2xl">
          Job Listings
        </Heading>
        <ButtonNav style={{ border: "1px solid #1E293B" }}>
          Create Listing
        </ButtonNav>
      </Flex>
      <JobSearch />
      <Box mt="42px">
        <JobList />
      </Box>
    </div>
  );
};

export default JobListings;
