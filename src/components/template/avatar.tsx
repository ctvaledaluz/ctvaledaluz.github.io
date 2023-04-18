import { Avatar, Center, Flex } from "@chakra-ui/react";
import logo from "../../assets/images/azul.png";

export default function CustomAvatar() {
  return (
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
  );
}
