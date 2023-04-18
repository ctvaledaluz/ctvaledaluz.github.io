import { Box, Heading, Text, Button } from "@chakra-ui/react";
import WhatButton from "../template/whatsButton";

export default function Ending() {
  return (
    <Box textAlign="center" py={10} px={6} pb={10}>
      <Heading
        display="inline-block"
        size="xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        Todas essas ideias são valiosas e podem ajudar muito!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Se você está interessado em contribuir, a melhor forma de começar é
        entrar em contato com a instituição e perguntar quais são suas
        necessidades e como você pode ajudar.
      </Text>
      <Text mb={6}>
        Divulgar a instituição em suas redes sociais e entre amigos e familiares
        também pode ajudar a aumentar o conhecimento e apoio à instituição.
      </Text>
      <Text mb={6}>
        Nos mande uma mensagem falando sobre sua vontade de colaborar. Ficaremos
        muito felizes em receber seu contato.
      </Text>
      <WhatButton />
    </Box>
  );
}
