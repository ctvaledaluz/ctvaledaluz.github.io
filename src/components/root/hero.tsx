import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import CustomAvatar from "./avatar";
import WhatButton from "./whatsButton";
import AboutButton from "./aboutButton";

export default function Hero() {
  return (
    <>
      <Flex
        w={"full"}
        h={"65vh"}
        bgImage={"url(src/assets/images/head-img.webp)"}
        bgSize={"cover"}
        bgPosition={"center center"}
        borderBottom="2px solid black"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            >
              Comunidade Terapêutica Vale da Luz
            </Text>
            <Stack direction={"row"}>
              <AboutButton />
              <WhatButton />
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <CustomAvatar />
    </>
  );
}
