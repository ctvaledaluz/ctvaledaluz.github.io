import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Target() {
  return (
    <Box p={4} pt={10}>
      <Stack spacing={4} as={Container} maxW={"6xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Público-alvo</Heading>
        <Text fontSize={{ base: "sm", sm: "lg" }}>
          Os programas de atendimento aos usuários de substâncias psicoativas da
          Comunidade Terapêutica Vale da Luz é voltada à comunidade de todo
          território nacional. A instituição atualmente tem 36 (trinta e seis)
          vagas para homens da idade de 18 a 59 anos.
        </Text>
      </Stack>
    </Box>
  );
}
