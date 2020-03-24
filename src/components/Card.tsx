import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image as Picture,
  Paragraph,
  Button,
  ResponsiveContext,
} from "grommet";
import { Cart, Favorite } from "grommet-icons";
import { productData, AppEvent } from "./ProductData"

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
              <Paragraph
                margin={
                  size === "xsmall" ? "2px" : size === "small" ? "5px" : "10px"
                }
                responsive
                size={
                  size === "xsmall"
                    ? "small"
                    : size === "small"
                    ? "small"
                    : "medium"
                }
              >
                {this.props.event.productText}
              </Paragraph>
            </Box>
            <div style={buttonStyles}>
              <Button
                icon={
                  <Favorite
                    size={
                      size === "xsmall"
                        ? "small"
                        : size === "small"
                        ? "small"
                        : "medium"
                    }
                  />
                }
                // label="Add to Cart"
                // onClick={() => {}}
                color="blue"
              />
              <Button
                icon={
                  <Cart
                    size={
                      size === "xsmall"
                        ? "small"
                        : size === "small"
                        ? "small"
                        : "medium"
                    }
                  />
                }
                // label="Add to Cart"
                // onClick={() => {}}
                color="blue"
              />
              <Link to="/ProductPage">
                <Button label="Läs mer" 
                size="small"
                color="#8c7b75"
                />
              </Link>
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
