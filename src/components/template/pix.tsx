import {
  Avatar,
  Button,
  IconButton,
  Image,
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
} from "@chakra-ui/react";
import pix from "../../assets/images/pix.webp";

export default function Pix() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
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
    </Menu>
  );
}
