import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { RequiredButton } from "./rootModules";

import WhatButton from "../template/whatsButton";

export default function CallToAction() {
  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      bg={useColorModeValue("gray.300", "gray.700")}
    >
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Gostaria de saber mais informações?
      </Heading>
      <Text fontSize={"xl"} color={useColorModeValue("gray.700", "gray.100")}>
        Entre em contato pelo nosso WhatsApp e visite nossa página{" "}
        <b>Quem Somos</b>:
      </Text>
      <Center>
        <Box p={5}>
          <Stack direction={"row"}>
            <RequiredButton type={"a"} />
            <WhatButton />
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
