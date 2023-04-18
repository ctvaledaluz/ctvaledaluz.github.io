import { Center, Container, Stack, Text } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
}

export const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Stack
      as={Container}
      maxHeight={"xl"}
      border={"2px solid gray"}
      rounded={"xl"}
      p={10}
    >
      <Text fontWeight={600} fontSize={"2xl"} pb={5} as={Center}>
        {title}
      </Text>
      <Text align={"right"}>{text}</Text>
    </Stack>
  );
};
