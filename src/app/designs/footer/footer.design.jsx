import { Grid, Box } from "@material-ui/core";
import React, { PureComponent } from "react";

export class FooterDesign extends PureComponent {
  render() {
    return (
      <footer style={{width: '100%'}}>
        <Box className="footer"></Box>

        <Box bgcolor="text.primary" className="secondFooter"></Box>
      </footer>
    );
  }
}

export default FooterDesign;
