import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function Target() {
  const data = [
    {
      id: 1,
      title: "Público-alvo",
      content:
        "Os programas de atendimento aos usuários de substâncias psicoativas da Comunidade Terapêutica Vale da Luz é voltada à comunidade de todo território nacional. A instituição atualmente tem 36 (trinta e seis) vagas para homens da idade de 18 a 59 anos.",
    },
  ];
  return (
    <Box p={4} pt={10}>
      {data.map((c) => (
        <Stack
          spacing={4}
          as={Container}
          maxW={"6xl"}
          textAlign={"center"}
          key={c.id}
        >
          <Heading fontSize={"3xl"}>{c.title}</Heading>
          <Text fontSize={{ base: "sm", sm: "lg" }}>{c.content}</Text>
        </Stack>
      ))}
    </Box>
  );
}
