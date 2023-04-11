import {
  Avatar,
  Center,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import pix from "../../assets/images/pix.webp";

export default function Pix() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size={"md"}
        variant={"ghost"}
        aria-label="pix"
      >
        <Avatar size={"sm"} src={pix} />
      </MenuButton>
      <MenuList alignItems={"center"}>
        <br />
        <Center>
          <Avatar size={"2xl"} src={pix} />
        </Center>
        <br />
        <Center>
          <p>Use o QRCode</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Login</MenuItem>
      </MenuList>
    </Menu>
  );
}
