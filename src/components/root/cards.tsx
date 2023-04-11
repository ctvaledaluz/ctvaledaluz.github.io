import {
  Box,
  Container,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { FcMakeDecision, FcManager, FcSportsMode } from "react-icons/fc";

import {
  CardContainer,
  CardContent,
  CardHeading,
  CardText,
} from "./rootModules";

export default function CustomCards() {
  const icon_size = 20;
  const heading = ["Atuação", "Metodologia", "Resultados"];
  const icon = [FcManager, FcMakeDecision, FcSportsMode];
  const body = [
    "Acolhemos pessoas do sexo masculino de 18 a 59 anos, com o objetivo de apoiá-los a interromper o uso álcool e drogas, através de um novo estilo de vida, com mudanças de valores e ressignificação de propósito, promovendo ações especializadas de inclusão social e desenvolvimento pessoal.",
    "Provocar mudança de valores, por meio do respeito a dignidade humana, convivência entre os pares (outros dependentes) e espiritualidade, com humanização e desenvolvimento de potencialidades, contemplanto o ser em sua integralidade, abrangendo especialmente a família.",
    "Quando pessoas reabilitadas têm acesso a melhores condições de vida, como tratamento adequado, educação e ressocialização, tendem a estar mais envolvidas em suas comunidades e têm menos probabilidade de experimentar situações de recaída ou isolamento social.",
  ];
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {heading.map((head, id) => (
            <CardContainer key={id}>
              <CardContent>
                <CardHeading>{head}</CardHeading>
                <CardText>{body[id]}</CardText>
              </CardContent>
              <Flex align={"center"} mt={8} direction={"column"}>
                <Icon boxSize={icon_size} as={icon[id]} />
              </Flex>
            </CardContainer>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
