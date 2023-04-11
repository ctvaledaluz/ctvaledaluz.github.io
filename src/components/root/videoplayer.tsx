import ReactPlayer from "react-player";
import { Center, useColorModeValue } from "@chakra-ui/react";

export default function PitchPlayer() {
  return (
    <Center
      backgroundColor={useColorModeValue("white", "gray.800")}
      padding={10}
    >
      <ReactPlayer
        url="https://youtu.be/teuyfh300TU"
        loop={true}
        muted={true}
        playing={true}
      />
    </Center>
  );
}
