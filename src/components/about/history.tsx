import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function History() {
  const data = [
    {
      id: 1,
      title: "Breve histórico",
      content1:
        "Em meados de 1988, Pastores e membros da Igreja do Evangelho Quadrangular se mobilizaram para criar uma OSC (Organização da Sociedade Civil) que tivesse como objetivo promover ações sociais de impacto na comunidade. Assim nasceu a SASIEQ - Serviço de Ação Social, Integração, Educação e Qualidade - uma instituição sem fins lucrativos, de cunho filantrópico, que foi fundada oficialmente em 11 de janeiro de 1990, na cidade de Joinville, em Santa Catarina. Desde então, a SASIEQ tem se dedicado a desenvolver uma série de projetos assistenciais que visam melhorar a qualidade de vida de pessoas em situação de vulnerabilidade. Uma dessas iniciativas foi a construção da Comunidade Terapêutica 'Vale da Luz', que oferece um programa de recuperação para dependentes químicos.",
      content2:
        "Situada na estrada do Salto Alto I, na Vila Nova, a Comunidade Terapêutica é um espaço de acolhimento residencial para aqueles que desejam se livrar do vício e retomar o controle de suas vidas.",
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
