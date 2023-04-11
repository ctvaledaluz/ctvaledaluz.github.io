import { ReactNode } from "react";
import { FcMakeDecision, FcManager, FcSportsMode } from "react-icons/fc";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return <Box maxWidth={"sm"}>{children}</Box>;
};

const CardContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const CardHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const CardText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"md"}
    >
      {children}
    </Text>
  );
};

export default function CustomCards() {
  const icon_size = 20;

  const heading = ["Atuação", "Metodologia", "Resultados"];

  const body = [
    "Acolhemos pessoas do sexo masculino de 18 a 59 anos, com o objetivo de apoiá-los a interromper o uso álcool e drogas, através de um novo estilo de vida, com mudanças de valores e ressignificação de propósito, promovendo ações especializadas de inclusão social e desenvolvimento pessoal.",
    "Provocar mudança de valores, por meio do respeito a dignidade humana, convivência entre os pares (outros dependentes) e espiritualidade, com humanização e desenvolvimento de potencialidades, contemplanto o ser em sua integralidade, abrangendo especialmente a família.",
    "Quando pessoas reabilitadas têm acesso a melhores condições de vida, como tratamento adequado, educação e ressocialização, tendem a estar mais envolvidas em suas comunidades e têm menos probabilidade de experimentar situações de recaída ou isolamento social.",
  ];

  const icon = [FcManager, FcMakeDecision, FcSportsMode];

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
