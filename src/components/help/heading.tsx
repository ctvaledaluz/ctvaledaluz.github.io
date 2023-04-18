import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function HelpHeading() {
  const data = [
    {
      id: 1,
      title: "Formas de contribuir",
      content1:
        "Que tal fazer a diferença na vida de pessoas que estão em recuperação da dependência química? Se você tem interesse em ajudar, uma forma muito significativa é se tornar voluntário em uma comunidade terapêutica. Como voluntário, você pode oferecer seu tempo, talento e energia para ajudar a tornar a vida dos residentes mais feliz e saudável. Não importa qual é a sua habilidade ou disponibilidade de tempo, qualquer contribuição é muito valiosa para a comunidade terapêutica. Se você está disposto a ajudar, não hesite em entrar em contato conosco.",
      content2:
        "Aqui estão 8 idéias de como ajudar a Comunidade Terapêutica Vale da Luz",
    },
  ];
  return (
    <Box p={4}>
      {data.map((c) => (
        <Stack
          spacing={4}
          as={Container}
          maxW={"6xl"}
          textAlign={"center"}
          key={c.id}
        >
          <Heading fontSize={"3xl"}>{c.title}</Heading>
          <Text fontSize={{ base: "sm", sm: "lg" }}>{c.content1}</Text>
          <Text fontSize={{ base: "sm", sm: "lg" }}>{c.content2}</Text>
        </Stack>
      ))}
    </Box>
  );
}
