import React, { CSSProperties } from "react";
import { Box, Image as Picture, Paragraph, Button, ResponsiveContext } from "grommet";
import { Cart, Favorite } from "grommet-icons";
import { AppEvent } from "./MainContent";

interface Props {
  event: AppEvent;
}

export default class Card extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
           <Box direction="column" justify="center" align="center">
           <Box>
             <Picture fit="cover" src={this.props.event.mainImg} />
             <Paragraph margin="0.5rem">{this.props.event.productText}</Paragraph>
           </Box>
           <div style={buttonStyles}>
             <Button
               icon={<Favorite size="small"/>}
               // label="Add to Cart"
               // onClick={() => {}}
               color="blue"
             />
             <Button
               icon={<Cart size="small"/>}
               // label="Add to Cart"
               // onClick={() => {}}
               color="blue"
             />
           </div>
         </Box>
        )}
     </ResponsiveContext.Consumer>
    );
  }
}

const buttonStyles: CSSProperties = {
  display: "flex"
};
