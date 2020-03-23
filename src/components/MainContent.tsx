import React, { Component } from "react";
import { Grid, Box, ResponsiveContext, grommet } from "grommet";
import Card from "./Card";
import Image from "../assets/ceramics1.jpg";
import Image2 from "../assets/ceramics2.jpg";
import Image3 from "../assets/ceramics3.jpg";
import Image4 from "../assets/ceramics4.jpg";

interface Props {}

export interface AppEvent {
  mainImg: string;
  productText: string;
  id: string;
}

const productData: AppEvent[] = [
  {
    mainImg: Image,
    productText: "Info om product 1",
    id: "box1"
  },

  {
    mainImg: Image2,
    productText: "Info om product 2",
    id: "box2"
  },

  {
    mainImg: Image3,
    productText: "Info om product 3",
    id: "box3"
  },

  {
    mainImg: Image4,
    productText: "Info om product 4",
    id: "box4"
  }
];

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
            //Medium här för desktop, annars small
            rows={
              size === "xsmall"
                ? ["small", "small"]
                : size === "small"
                ? ["small", "small"]
                : ["medium", "medium"]
            }
            columns={
              size === "xsmall"
                ? ["small", "small"]
                : size === "small"
                ? ["small", "small"]
                : ["medium", "medium"]
            }
            gap={size === "xsmall" ? "small" : "large"}
            areas={[
              { name: "box1", start: [0, 0], end: [1, 0] },
              { name: "box2", start: [1, 0], end: [1, 1] },
              { name: "box3", start: [0, 1], end: [0, 1] },
              { name: "box4", start: [1, 1], end: [1, 1] }
            ]}
          >
            {productData.map(event => (
              <Box
                gridArea={event.id}
                background="light-2"
                elevation="medium"
                key={event.productText}
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
