import React from "react";
import PropTypes from "prop-types";
import { Typography as UiTypography } from "@mui/material";

export default function Typography({
  variant = "body1",
  component = "",
  align = "inherit",
  text = "h1 Heading",
  ...rest
}) {
  return (
    <UiTypography
      variant={variant}
      component={component}
      align={align}
      gutterBottom
      {...rest}
    >
      {text}
    </UiTypography>
  );
}

Typography.propTypes = {
  /**
   *  'center' | 'inherit' | 'justify' | 'left' | 'right'
   */
  align: PropTypes.string,
  /**
   *  'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4'| 'h5'| 'h6'| 'inherit'| 'overline'| 'subtitle1'| 'subtitle2'| string
   */
  variant: PropTypes.string,
  /**
   *  { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6', subtitle1: 'h6', subtitle2: 'h6', body1: 'p', body2: 'p', inherit: 'p', }
   */
  component: PropTypes.string,
  /**
   * text contents
   */
  text: PropTypes.string.isRequired,
};

Typography.defaultProps = {
  variant: "body1",
};
