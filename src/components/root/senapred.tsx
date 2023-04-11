import { Box, VStack, Image, Text } from "@chakra-ui/react";

import logo from "../../assets/images/governo-federal.png";

export default function Senapred() {
  return (
    <VStack padding={16}>
      <Box>
        <Text fontSize="2xl" align={"center"}>
          Temos vagas gratuitas financiadas pelos governos
        </Text>
        <Text fontSize="2xl" align={"center"}>
          Estadual (Programa Reviver) e Federal (SENAPRED)
        </Text>
      </Box>
      <Image
        boxSize={"xl"}
        objectFit="contain"
        height={"50%"}
        src={logo}
        alt="Governo Federal"
      />
    </VStack>
  );
}
