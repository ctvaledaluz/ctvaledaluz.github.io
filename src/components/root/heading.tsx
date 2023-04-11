import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function RootHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Acolhimento para usuários de álcool e drogas
        </Heading>
        <Text fontSize={{ base: "sm", sm: "lg" }}>
          A <b>Comunidade Terapêutica Vale da Luz</b> é uma ação de cunho
          assistencial desenvolvida pela{" "}
          <b>
            SASIEQ (Serviço de Ação Social, Integração, Educação e Qualidade)
          </b>{" "}
          de Joinville - SC e tem como objetivo o acolhimento e reabilitação de
          dependentes qímicos, usuários de álcool e drogas.
        </Text>
        <Text fontSize={{ base: "sm", sm: "lg" }}>
          {" "}
          Atendemos homens com idade entre 18 e 59 anos.
        </Text>
      </Stack>
    </Box>
  );
}
