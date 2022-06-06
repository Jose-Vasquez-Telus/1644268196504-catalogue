import React from "react";
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import ChevronLink from "@tds/core-chevron-link";
import Box from "@tds/core-box";
const Home = () => (
  <Box below={8}>
    <FlexGrid>
      <FlexGrid.Row>
        <FlexGrid.Col>
          <Box style={{ background: "#4b286d" }} inset={4} between={3}>
            <Heading invert level="h1">
              Devices
            </Heading>
            <ChevronLink href="/watches" variant="inverted">
              Apple Watches catalog
            </ChevronLink>
            <ChevronLink href="/iphones" variant="inverted">
              Iphone catalog
            </ChevronLink>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
    </FlexGrid>
  </Box>
);

export default Home;
