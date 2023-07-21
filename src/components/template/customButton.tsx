import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  route: string;
  icon: any;
  text: string;
}

export default function CustomButton({ route, icon, text }: CustomButtonProps) {
  return (
    <Link to={route}
          target={"_blank"}
    >
      <Button
        leftIcon={icon}
        bg={"teal.700"}
        color={"white"}
        _hover={{ bg: "teal.500" }}
      >
        {text}
      </Button>
    </Link>
  );
}
