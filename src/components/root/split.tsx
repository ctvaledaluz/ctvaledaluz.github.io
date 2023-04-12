import {
  Text,
  Stack,
  Image,
  Box,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  text: string;
  icon: string;
}

export const Feature = ({ title, text, icon }: FeatureProps) => {
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
