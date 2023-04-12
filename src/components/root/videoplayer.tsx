import { Box, Center } from "@chakra-ui/react";
import { Component } from "react";
import ReactPlayer from "react-player";

export default class Video extends Component {
  render() {
    return (
      <Center>
        <Box className="player-wrapper" w={[360, 600, 1000]} shadow={"md"}>
          <ReactPlayer
            className="react-player fixed-bottom"
            url="pitch.webm"
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            muted={true}
          />
        </Box>
      </Center>
    );
  }
}
