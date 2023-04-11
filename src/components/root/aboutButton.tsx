import { Button } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function AboutButton() {
  return (
    <Link to="/about">
      <Button
        leftIcon={<BiInfoCircle />}
        bg={"teal.700"}
        color={"white"}
        _hover={{ bg: "teal.500" }}
      >
        Sobre
      </Button>
    </Link>
  );
}
