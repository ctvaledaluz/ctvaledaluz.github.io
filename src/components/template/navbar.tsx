import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";

import Pix from "./pix";
import logo from "../../assets/images/azul.png";
import SiteMenu from "./menu";

export default function Nav() {
  return (
    <Box bg={useColorModeValue("blue.900", "gray.900")}>
      <Flex
        zIndex={"dropdown"}
        backgroundColor={useColorModeValue("blue.900", "gray.900")}
        textColor="white"
        as="header"
        position="fixed"
        w="100%"
        h={14}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <SiteMenu />
        <Link to="/">
          <HStack>
            <Image boxSize={"10"} borderRadius="full" src={logo}></Image>
            <Text>Vale da Luz</Text>
          </HStack>
        </Link>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Pix />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
