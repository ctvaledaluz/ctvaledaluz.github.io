import {
  Box,
  Button,
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
                  variant="ghost"
                  mb="2"
                  w="100%"
                  onClick={isOpen ? onClose : onOpen}
                >
                  Ajuda
                </Button>
              </Link>
              <Divider />
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
