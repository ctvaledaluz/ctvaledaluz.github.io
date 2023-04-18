import { Box, Container, Flex, Icon } from "@chakra-ui/react";

import {
  MdAccessibilityNew,
  MdAlarmAdd,
  MdCampaign,
  MdCleanHands,
  MdDiversity1,
  MdHandshake,
  MdPix,
  MdShoppingCart,
} from "react-icons/md";

import { VolunteerCard } from "./helpModules";

export default function Volunteering() {
  const data = [
    {
      id: 1,
      title: "Voluntariado",
      icon: MdAlarmAdd,
      content:
        "Ofereça seu tempo e habilidades para ajudar em atividades e projetos da Comunidade Terapêutica Vale da Luz.",
    },
    {
      id: 2,
      title: "Doação financeira",
      icon: MdPix,
      content:
        "Contribua com dinheiro para ajudar na manutenção e melhorias da estrutura e atividades da cComunidade Terapêutica Vale da Luz.",
    },
    {
      id: 3,
      title: "Doação de alimentos",
      icon: MdShoppingCart,
      content:
        "Contribua com alimentos para garantir uma alimentação adequada aos residentes da Comunidade Terapêutica Vale da Luz.",
    },
    {
      id: 4,
      title: "Materiais de higiene e limpeza",
      icon: MdCleanHands,
      content:
        "Contribua com alimentos para garantir uma alimentação adequada aos residentes da Comunidade Terapêutica Vale da Luz.",
    },
    {
      id: 5,
      title: "Doação de roupas e objetos",
      icon: MdAccessibilityNew,
      content:
        "Contribua com roupas e objetos que possam ser utilizados pelos residentes da Comunidade Terapêutica Vale da Luz.",
    },
    {
      id: 6,
      title: "Divulgação da instituição",
      icon: MdCampaign,
      content:
        " Divulgue a comunidade terapêutica em suas redes sociais, entre amigos e familiares para ajudar a aumentar o conhecimento e apoio à instituição.",
    },
    {
      id: 7,
      title: "Parcerias",
      icon: MdHandshake,
      content:
        "Estabeleça parcerias com empresas e instituições para ajudar a Comunidade Terapêutica Vale da Luz.",
    },
    {
      id: 8,
      title: "Eventos beneficentes",
      icon: MdDiversity1,
      content:
        "Organize eventos com objetivo de arrecadar fundos ou doações para a Comunidade Terapêutica Vale da Luz.",
    },
  ];
  return (
    <Box p={4}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={16} justify="center">
          {data.map((c) => (
            <VolunteerCard
              key={c.id}
              heading={c.title}
              icon={<Icon as={c.icon} w={10} h={10} />}
              description={c.content}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
