import { ReactElement } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
}

export const VolunteerCard = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "400px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading as={Center} size="md" pt={5} pb={5}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={"md"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
