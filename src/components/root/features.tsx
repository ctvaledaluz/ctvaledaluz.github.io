import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { Feature } from "./split";

import card1 from "../../assets/images/card1.webp";
import card2 from "../../assets/images/card2.webp";
import card3 from "../../assets/images/card3.webp";

export default function Features() {
  const content = [
    {
      id: 1,
      image: card1,
      title: "Acompanhamento Técnico",
      text: "Investimos constantemente em treinamento de equipe e melhorias na estrutura para alcançar excelência em atendimento.",
    },
    {
      id: 2,
      image: card2,
      title: "Monitoramento",
      text: "Investimento em tecnologias de monitoramento em toda área comum da comunidade terapêutica para manter a segurança tanto de acolhidos como da equipe.",
    },
    {
      id: 3,
      image: card3,
      title: "Estrutura",
      text: "Investimos na formação de um caráter renovado utilizando as mlehores tendências em ferramentas psicoterapêuticas, bem como cuidado pessoal.",
    },
  ];
  return (
    <Box p={4}>
      <Center>
        <Heading fontWeight={600} paddingTop={10}>
          Nossos diferenciais
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {content.map((c) => (
          <Feature key={c.id} icon={c.image} title={c.title} text={c.text} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
