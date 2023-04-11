import {
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import WhatButton from "./whatsButton";
import AboutButton from "./aboutButton";

export default function CallToAction() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Gostaria de saber mais informações?
      </Heading>
      <Text color={useColorModeValue("gray.700", "gray.100")}>
        Entre em contato pelo nosso WhatsApp:
      </Text>
      <Center>
        <Box p={5}>
          <Stack direction={"row"}>
            <AboutButton />
            <WhatButton />
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
