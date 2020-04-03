import React from "react";
import {
  Box,
  Carousel,
  Image as Picture,
  Paragraph,
  ResponsiveContext
} from "grommet";
import Image from "../assets/Omoss1.jpg";
import Image2 from "../assets/Omoss2.jpg";
import Image3 from "../assets/Omoss3.jpg";

interface Props {}

export default class OmOss extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box align="center">
            <Box width="large" margin="1.5rem">
              <Paragraph responsive margin="medium" size="small" fill>
                Kerstins Keramik drivs av Kerstin Almkvist. Hon är utbildad
                keramiker och har arbetat med detta vid sidan av sedan 2008. I
                slutet av 2015 öppnade hon sin egna studio och har sedan dess
                arbetat med keramik på heltid. I studion, som ligger en bit
                utanför Skövde, skapar hon bruksföremål, så som koppar, fat,
                tallrikar och liknande. Alla produkter är gjorda för hand.
              </Paragraph>
              <Box
                height={size === "xsmall" ? "small" : "medium"}
                width={size === "xsmall" ? "small" : "medium"}
                overflow="hidden"
                alignSelf="center"
                elevation="medium"
                margin="small"
              >
                <Carousel fill>
                  <Picture src={Image} fit="cover" />
                  <Picture src={Image2} fit="cover" />
                  <Picture src={Image3} fit="cover" />
                </Carousel>
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}
