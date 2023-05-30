import React, { useState } from 'react';
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useColorMode,
  useDisclosure,
  Center
} from "@chakra-ui/react";
import pix from "../../assets/images/pix.webp";
import { Link } from "react-router-dom";

export default function Pix() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isShown, setIsShown] = useState(false);
  const data = [
    {
      id: 1,
      title: "Você pode ajudar com um PIX",
      text1: "Nosso QRCode:",
      text2: "Chave CNPJ: 81.140.360/0001-90",
      button1: "Outras formas",
      button2: "Fechar",
      image: pix,
    },
  ];
  return (
    <Menu>
      <MenuButton
        onClick={() => {
          onOpen();
        }}
        as={IconButton}
        size={"md"}
        variant={"ghost"}
        aria-label="pix"
      >
        <Avatar size={"sm"} src={pix} />
      </MenuButton>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg={colorMode === "light" ? "blackAlpha.300" : "blackAlpha.300"}
          backdropFilter={
            colorMode === "light" ? "auto" : "blur(10px) hue-rotate(90deg)"
          }
          backdropInvert={colorMode === "light" ? "20%" : ""}
          backdropBlur={colorMode === "light" ? "2px" : ""}
        />
        {data.map((c) => (
          <ModalContent key={c.id}>
            <ModalHeader display={"flex"} justifyContent={"center"}>
              {c.title}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/*<Text align="center">{c.text1}</Text>*/}
              {/*<Image src={c.image} />*/}
              <Text as={Center}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    bg={isShown ? "teal.200" : "transparent"}
                    cursor={isShown ? "pointer" : "none" }
                >{c.text2}
              </Text>
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"center"}>
              <Link to="/help">
                <Button onClick={onClose} variant={"solid"} colorScheme="teal">
                  {c.button1}
                </Button>
              </Link>
              <Spacer />
              <Button onClick={onClose} variant={"outline"} colorScheme="teal">
                {c.button2}
              </Button>
            </ModalFooter>
          </ModalContent>
        ))}
      </Modal>
    </Menu>
  );
}
