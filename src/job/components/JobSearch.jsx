import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Grid,
  Flex,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import CustomMenuList from "../../shared/CustomMenuList";
const experienceLevels = [
  { value: 0, label: "Any" },
  { value: 1, label: "Junior" },
  { value: 2, label: "Mid-Level" },
  { value: 3, label: "Senior" },
];
const jobTypes = [
  { value: 0, label: "Any" },
  { value: 1, label: "Full Time" },
  { value: 2, label: "Part Time" },
  { value: 3, label: "Internship" },
];
const JobSearch = () => {
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [experience, setExperience] = useState(experienceLevels[0]);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap="1rem"
    >
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Location</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Minimum Salary</FormLabel>
        <NumberInput min={0}>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Job Type</FormLabel>
        <CustomMenuList
          options={jobTypes}
          value={jobType}
          onChange={(option) => setJobType(option)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Experience Level</FormLabel>
        <CustomMenuList
          options={experienceLevels}
          value={experience}
          onChange={(option) => setExperience(option)}
        />
      </FormControl>
      <Flex justifyContent="space-between" alignItems="end">
        <Flex direction="column">
          <Checkbox colorScheme="white" value={0}>
            Show Hidden
          </Checkbox>
          <Checkbox colorScheme="white" value={1}>
            Only Show Favorites
          </Checkbox>
        </Flex>

        <Button>Reset</Button>
      </Flex>
    </Grid>
  );
};

export default JobSearch;
