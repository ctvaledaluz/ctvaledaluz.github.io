import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Center,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import WhatButton from "../template/whatsButton";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function HowTo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = [
    {
      id: 2,
      header: "Requisitos para Internação",
      first_bolt: "Admissão: ",
      first_content:
        "Para ingressar em um programa de     recuperação, é essencial que o indivíduo queira se recuperar e esteja comprometido em participar de todas as atividades contidas no programa. Essa disposição é crucial para que o processo de recuperação seja efetivo e duradouro.",
      secound_content:
        "O programa de recuperação é desenvolvido de forma personalizada, considerando as particularidades de cada indivíduo, e é composto por atividades multidisciplinares, como psicoterapia, terapia ocupacional, atividades físicas e grupos de apoio. Além disso, o programa também inclui atividades educacionais e de capacitação profissional, para que o indivíduo possa retomar sua vida com autonomia e dignidade. Para garantir que todos os acolhidos tenham acesso aos benefícios do programa, é importante que eles estejam dispostos a se dedicar integralmente às atividades propostas. Dessa forma, será possível proporcionar uma recuperação completa e satisfatória.",
    },
  ];
  return (
    <VStack padding={16}>
      <Box
        bg={useColorModeValue("gray.300", "gray.900")}
        p={10}
        rounded={"xl"}
        shadow={"md"}
      >
        <Box>
          <Text fontSize="4xl" align={"center"}>
            Como faço para internar?
          </Text>
          <HStack as={Center} pt={10}>
            <WhatButton />
            <Button
              bg={"teal.700"}
              color={"white"}
              leftIcon={<InfoOutlineIcon />}
              onClick={onOpen}
              _hover={{ bg: "teal.500" }}
            >
              Saiba mais
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
              <ModalOverlay />
              {data.map((c) => (
                <ModalContent key={c.id}>
                  <ModalHeader>{c.header}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text fontSize={"xl"}>
                      <b>{c.first_bolt}</b>
                      {c.first_content}
                    </Text>
                    <Text pt={5}>{c.secound_content}</Text>
                  </ModalBody>
                  <ModalFooter>
                    <HStack>
                      <WhatButton />
                      <Button
                        bg="teal.700"
                        mr={3}
                        onClick={onClose}
                        color={"white"}
                      >
                        Fechar
                      </Button>
                    </HStack>
                  </ModalFooter>
                </ModalContent>
              ))}
            </Modal>
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
}
