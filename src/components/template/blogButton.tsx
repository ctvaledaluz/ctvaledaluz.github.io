import { Button } from "@chakra-ui/react";
import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BlogButton() {
  return (
    <Link
      to="http://blog.valedaluz.com.br/"
      target="_blank"
    >
      <Button
        leftIcon={<FaBlog />}
        bg={"teal.700"}
        color={"white"}
        _hover={{ bg: "teal.500" }}
      >
        Contato
      </Button>
    </Link>
  );
}
