import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RequiredButton } from "../root/rootModules";

import CustomAvatar from "./avatar";
import WhatButton from "../template/whatsButton";
import CustomButton from "./customButton";
import {FaBlog} from "react-icons/fa";

interface HeroProps {
  bg: string;
  title: string;
  type: string;
  target?: string;
}

export default function Hero({ bg, title, type }: HeroProps) {
  return (
    <>
      <Flex
        w={"full"}
        h={"65vh"}
        bgImage={bg}
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
              {title}
            </Text>
            <Stack direction={"row"}>
              <RequiredButton type={type} />
              <WhatButton />
              <CustomButton
                icon={<FaBlog />}
                route={"http://blog.valedaluz.com.br"}
                text={"Blog"}
              />
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <CustomAvatar />
    </>
  );
}
