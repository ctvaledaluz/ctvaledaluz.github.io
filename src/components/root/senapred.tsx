import { Box, VStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

export default function Senapred() {
  return (
    <VStack padding={16}>
      <Box
        bg={useColorModeValue("gray.300", "gray.900")}
        p={10}
        rounded={"xl"}
        shadow={"md"}
      >
        <Box>
          <Text fontSize="4xl" align={"center"}>
            Temos vagas gratuitas
          </Text>
          <Text fontSize="2xl" align={"center"}>
            financiadas pelos governos Estadual (Programa Reviver) e Federal
          </Text>
        </Box>
      </Box>
    </VStack>
  );
}
