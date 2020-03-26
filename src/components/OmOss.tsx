import React, { CSSProperties } from "react";
import { Box, Carousel, Image as Picture, Paragraph } from "grommet";
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
      <Box align="center">
        <Box width="large" margin="1.5rem">
          <Paragraph responsive margin="medium" size="small" fill>
            Kerstins Keramik drivs av Kerstin Almkvist. Hon är utbildad
            keramiker och har arbetat med detta vid sidan av sedan 2013, men
            öppnade hon sin egna studio 2015 och har sedan dess arbetet med
            detta på heltid. Studion ligger en bit utanför Skövde, där hon
            skapar bruksföremål, så som koppar, fat, koppar och liknande. Alla
            produkter är gjorda från grunden av henne.
          </Paragraph>
          <Box
            height="medium"
            width="medium"
            overflow="hidden"
            alignSelf="center"
            elevation="medium"
          >
            <Carousel fill>
              <Picture src={Image} fit="cover" />
              <Picture src={Image2} fit="cover" />
              <Picture src={Image3} fit="cover" />
            </Carousel>
          </Box>
        </Box>
      </Box>
    );
  }
}
