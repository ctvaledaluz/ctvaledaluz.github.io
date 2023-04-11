import { Button } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhatButton() {
  return (
    <Link
      to="https://api.whatsapp.com/send?phone=554791793260&text=Entrei%20em%20contato%20pelo%20site.%20"
      target="_blank"
    >
      <Button
        leftIcon={<FaWhatsapp />}
        bg={"teal.700"}
        color={"white"}
        _hover={{ bg: "teal.500" }}
      >
        Contato
      </Button>
    </Link>
  );
}
