import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useColorMode,
  Image,
  Avatar,
  Center,
  Spacer,
} from "@chakra-ui/react";

import pix from "../../assets/images/pix.webp";
import logo from "../../assets/images/azul.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        w={"full"}
        h={"65vh"}
        bgImage={"url(src/assets/images/head-img.webp)"}
        bgSize={"cover"}
        bgPosition={"center center"}
        borderBottom="2px solid black"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            >
              Comunidade Terapêutica Vale da Luz
            </Text>
            <Stack direction={"row"}>
              <Link to="/about">
                <Button
                  bg={"teal.600"}
                  color={"white"}
                  _hover={{ bg: "teal.500" }}
                >
                  Sobre
                </Button>
              </Link>
              <Button
                bg={"teal.700"}
                color={"white"}
                onClick={() => {
                  onOpen();
                }}
                _hover={{ bg: "teal.500" }}
              >
                Como Ajudar
              </Button>
            </Stack>
          </Stack>
        </VStack>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg={colorMode === "light" ? "blackAlpha.300" : "blackAlpha.300"}
            backdropFilter={
              colorMode === "light" ? "auto" : "blur(10px) hue-rotate(90deg)"
            }
            backdropInvert={colorMode === "light" ? "20%" : ""}
            backdropBlur={colorMode === "light" ? "2px" : ""}
          />
          <ModalContent>
            <ModalHeader display={"flex"} justifyContent={"center"}>
              Você pode ajudar com um PIX
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text align="center">Nosso QRCode:</Text>
              <Image src={pix}></Image>
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"center"}>
              <Button variant={"solid"} colorScheme="teal">
                Outras formas
              </Button>
              <Spacer />
              <Button onClick={onClose} variant={"outline"} colorScheme="teal">
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Center py={6}>
        <Flex justify={"center"}>
          <Avatar
            boxSize={"48"}
            mt={-28}
            src={logo}
            border={"2px solid black"}
            zIndex={0}
          />
        </Flex>
      </Center>
    </>
  );
}
