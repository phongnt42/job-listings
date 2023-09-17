import React from "react";
import { Box, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineEyeInvisible,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";

import BadgeCustom from "./BadgeCustom";

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
            <Icon as={AiOutlineEyeInvisible} color="white" />
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
            <Icon as={AiOutlineHeart} color="white" />
          </Button>
        </Flex>
      </Flex>
      <Flex gap="5px">
        <BadgeCustom value="$200,000" icon={FaRegMoneyBillAlt} />
        <BadgeCustom value="Full Time" icon={AiOutlineCalendar} />
        <BadgeCustom value="Senior" icon={RiGraduationCapLine} />
      </Flex>
      <Text mt="20px">We are looking for a dedicated senior web developer</Text>
      <Flex justifyContent="end">
        <Button mt="20px">View more</Button>
      </Flex>
    </Box>
  );
};

export default JobCard;
