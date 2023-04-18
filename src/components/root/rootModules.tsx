import { ReactNode } from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  chakra,
  Image,
} from "@chakra-ui/react";

import CustomButton from "../template/customButton";

import { FaFingerprint, FaHandsHelping, FaHome } from "react-icons/fa";

interface requiredButtonProps {
  type: string;
}

interface SplitProps {
  title: string;
  text: string;
  icon: string;
}

export const CardContainer = ({ children }: { children: ReactNode }) => {
  return <Box maxWidth={"sm"}>{children}</Box>;
};

export const CardContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

export const CardHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

export const CardText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"md"}
    >
      {children}
    </Text>
  );
};

export const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("gray.100", "teal.700")}
      color={useColorModeValue("blue.900", "gray.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const RequiredButton = ({ type }: requiredButtonProps) => {
  switch (type) {
    case "a":
      return (
        <CustomButton
          route="/about"
          icon={<FaFingerprint />}
          text="Quem somos"
        />
      );
    case "h":
      return (
        <CustomButton
          route="/help"
          icon={<FaHandsHelping />}
          text="Como Ajudar"
        />
      );
    case "r":
      return (
        <CustomButton
          route="/"
          icon={<FaHome />}
          text="Página Inicial"
          //quebra de linha no código
        />
      );
    default:
      return <></>;
  }
};

export const Feature = ({ title, text, icon }: SplitProps) => {
  return (
    <Stack align={"center"} paddingTop={10}>
      <Box boxSize="60">
        <Image rounded={"xl"} src={icon} shadow={"xl"} />
      </Box>
      <Heading size={"md"} fontWeight={600} paddingTop={10}>
        {title}
      </Heading>
      <Text
        align={"center"}
        padding={10}
        color={useColorModeValue("gray.700", "gray.100")}
      >
        {text}
      </Text>
    </Stack>
  );
};
