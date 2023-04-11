import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { Feature } from "./split";

import card1 from "../../assets/images/card1.webp";
import card2 from "../../assets/images/card2.webp";
import card3 from "../../assets/images/card3.webp";

export default function Features() {
  const images = [card1, card2, card3];
  const names = ["Acompanhamento Técnico", "Monitoramento", "Estrutura"];
  const contents = [
    "Investimos constantemente em treinamento de equipe e melhorias na estrutura para alcançar excelência em atendimento.",
    "Investimento em tecnologias de monitoramento em toda área comum da comunidade terapêutica para manter a segurança tanto de acolhidos como da equipe.",
    "Investimos na formação de um caráter renovado utilizando as mlehores tendências em ferramentas psicoterapêuticas, bem como cuidado pessoal.",
  ];
  return (
    <Box p={4}>
      <Center>
        <Heading fontWeight={600} paddingTop={10}>
          Nossos diferenciais
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {images.map((image, id) => (
          <Feature
            key={id}
            icon={image}
            title={names[id]}
            text={contents[id]}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
