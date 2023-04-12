import {
  Box,
  Container,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  CardContainer,
  CardContent,
  CardHeading,
  CardText,
} from "./rootModules";

import { FcMakeDecision, FcManager, FcSportsMode } from "react-icons/fc";

export default function CustomCards() {
  const icon_size = 20;
  const cards = [
    {
      id: 1,
      title: "Atuação",
      icon: FcManager,
      text: "Acolhemos pessoas do sexo masculino de 18 a 59 anos, com o objetivo de apoiá-los a interromper o uso álcool e drogas, através de um novo estilo de vida, com mudanças de valores e ressignificação de propósito, promovendo ações especializadas de inclusão social e desenvolvimento pessoal.",
    },
    {
      id: 2,
      title: "Metodologia",
      icon: FcMakeDecision,
      text: "Provocar mudança de valores, por meio do respeito a dignidade humana, convivência entre os pares (outros dependentes) e espiritualidade, com humanização e desenvolvimento de potencialidades, contemplanto o ser em sua integralidade, abrangendo especialmente a família.",
    },
    {
      id: 3,
      title: "Resultados",
      icon: FcSportsMode,
      text: "Quando pessoas reabilitadas têm acesso a melhores condições de vida, como tratamento adequado, educação e ressocialização, tendem a estar mais envolvidas em suas comunidades e têm menos probabilidade de experimentar situações de recaída ou isolamento social.",
    },
  ];
  return (
    <Box bg={useColorModeValue("gray.300", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {cards.map((c) => (
            <CardContainer key={c.id}>
              <CardContent>
                <CardHeading>{c.title}</CardHeading>
                <CardText>{c.text}</CardText>
              </CardContent>
              <Flex align={"center"} mt={8} direction={"column"}>
                <Icon boxSize={icon_size} as={c.icon} />
              </Flex>
            </CardContainer>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
