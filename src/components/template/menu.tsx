import {
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaHome,
  FaInfoCircle,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkedAlt,
  FaMapMarked,
  FaBlog,
} from "react-icons/fa";

export default function SiteMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        size={"md"}
        variant="ghost"
        aria-label={"Árvore do Site"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={isOpen ? onClose : onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="teal.500">MAPA DO SITE: </DrawerHeader>
          <DrawerBody>
            <Box>
              <Link to="/">
                <Button
                  leftIcon={<FaHome />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Início
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  leftIcon={<FaInfoCircle />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Sobre
                </Button>
              </Link>
              <Link to="/help">
                <Button
                  leftIcon={<FaHandsHelping />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Ajuda
                </Button>
              </Link>
              <Divider />
              <Center paddingTop={5} paddingBottom={3}>
                <Box bg={"teal.500"} color={"gray.700"}>
                  Redes Sociais:
                </Box>
              </Center>
              <Link
                to="https://api.whatsapp.com/send?phone=554791793260&text=Entrei%20em%20contato%20pelo%20site.%20"
                target="_blank"
              >
                <Button
                  leftIcon={<FaWhatsapp />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Whatsapp
                </Button>
              </Link>
              <Link to="https://www.facebook.com/ctvaledaluz" target="_blank">
                <Button
                  leftIcon={<FaFacebook />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Facebook
                </Button>
              </Link>
              <Link to="https://www.instagram.com/valedaluzct/" target="_blank">
                <Button
                  leftIcon={<FaInstagram />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Instagram
                </Button>
              </Link>
              <Link
                to="https://www.google.com.br/maps/place/Comunidade+Terap%C3%AAutica+Vale+da+Luz/@-26.2971789,-49.0353388,2866m/data=!3m1!1e3!4m5!3m4!1s0x0:0x25c0a454a236bc26!8m2!3d-26.2951575!4d-49.0139072?shorturl=1"
                target="_blank"
              >
                <Button
                  leftIcon={<FaMapMarkedAlt />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Localização
                </Button>
              </Link>
              <Divider />
              <Link to="#">
                <Button
                  leftIcon={<FaBlog />}
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Blog (em breve)
                </Button>
              </Link>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="solid"
              colorScheme={"teal"}
              w={"100%"}
              onClick={toggleColorMode}
              leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            >
              Usar tema {colorMode === "light" ? "dark" : "light"}
            </Button>
          </DrawerFooter>
          <Button variant="ghost" colorScheme={"teal"} onClick={onClose}>
            Fechar
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
}
