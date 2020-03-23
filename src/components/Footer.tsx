import React, { Component, CSSProperties } from "react";
import { Footer as AFooter, Anchor } from "grommet";
import { Facebook, Instagram, Mail } from "grommet-icons";

interface Props {}

export default class Footer extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <AFooter background="#d7ccc8" pad="medium" justify="center">
        <Anchor label={<Facebook />} />
        <Anchor label={<Instagram />} />
        <Anchor label={<Mail />} />
      </AFooter>
    );
  }
}
