import React, { Component } from "react";
import { Grid, Box, ResponsiveContext, grommet } from "grommet";
import { Card } from "./Card";
import { productData } from "./ProductData";

interface Props {}

export default class MainContent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            responsive
            justifyContent="center"
            margin="2rem"
            rows={
              size === "xsmall"
                ? ["20rem", "20rem", "20rem", "20rem"]
                : size === "small"
                ? ["small", "small"]
                : ["medium", "medium"]
            }
            columns={
              size === "xsmall"
                ? ["20rem"]
                : size === "small"
                ? ["small", "small"]
                : ["medium", "medium"]
            }
            gap={size === "xsmall" ? "small" : "large"}
            areas={
              size === "xsmall"
                ? [
                    { name: "box1", start: [0, 0], end: [0, 0] },
                    { name: "box2", start: [0, 1], end: [0, 1] },
                    { name: "box3", start: [0, 2], end: [0, 2] },
                    { name: "box4", start: [0, 3], end: [0, 3] }
                  ]
                : [
                    { name: "box1", start: [0, 0], end: [1, 0] },
                    { name: "box2", start: [1, 0], end: [1, 1] },
                    { name: "box3", start: [0, 1], end: [0, 1] },
                    { name: "box4", start: [1, 1], end: [1, 1] }
                  ]
            }
          >
            {productData.map(event => (
              <Box
                gridArea={event.id}
                background="light-2"
                elevation="medium"
                key={event.id}
              >
                <Card event={event} />
              </Box>
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
