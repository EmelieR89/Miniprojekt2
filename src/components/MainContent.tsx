import React, { Component } from "react";
import Image from "../assets/ceramics1.jpg";
import { Grid, Box, Image as Picture } from "grommet";

interface Props {}

export default class MainContent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Grid
        margin="2rem"
        rows={["auto", "auto"]}
        columns={["auto", "auto"]}
        gap="medium"
        areas={[
          { name: "box1", start: [0, 0], end: [1, 0] },
          { name: "box2", start: [1, 0], end: [1, 1] },
          { name: "box3", start: [0, 1], end: [0, 1] },
          { name: "box4", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box gridArea="box1" background="light-2" elevation="medium">
          <Box height="medium" width="medium">
            <Picture fit="cover" src={Image} />
          </Box>
        </Box>
        <Box gridArea="box2" background="light-2" elevation="medium">
          <Box height="medium" width="medium">
            <Picture fit="cover" src={Image} />
          </Box>
        </Box>
        <Box gridArea="box3" background="light-2" elevation="medium">
          <Box height="medium" width="medium">
            <Picture fit="cover" src={Image} />
          </Box>
        </Box>
        <Box gridArea="box4" background="light-2" elevation="medium">
          <Box height="medium" width="medium">
            <Picture fit="cover" src={Image} />
          </Box>
        </Box>
      </Grid>
    );
  }
}
