import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import Card from "@tds/core-card";
import PriceLockup from "@tds/core-price-lockup";
import HairlineDivider from "@tds/core-hairline-divider";
import Text from "@tds/core-text";
import Image from "@tds/core-image";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import FlexGrid from "@tds/core-flex-grid";

const Device = ({ name, brand, price, imgSrc }) => (
  <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
    <Box inset={3}>
      <Card variant="defaultWithBorder">
        <Box between={4}>
          <FlexGrid.Row horizontalAlign="center">
            <Image
              testid="image"
              src={imgSrc}
              alt="iphone image"
              width={200}
              height={200}
            />
          </FlexGrid.Row>
          <Box>
            <Heading testid="heading-brand" level="h3">
              {brand}
            </Heading>
            <Heading testid="heading-name" level="h2">
              {name}
            </Heading>
          </Box>
          <PriceLockup
            testid="price-lockup"
            size="medium"
            price={price}
            signDirection="left"
          />
        </Box>
        <Box vertical={4}>
          <HairlineDivider />
        </Box>
        <Box between={4}>
          <Text size="medium">
            TELUS Easy Payment and Bring-It-Back applied.
            <FootnoteLink number={[3]} onClick={() => {}} copy="en" />
            Read legal footnote Taxes due upfront.
          </Text>
          <Text size="medium">Retail price: $470</Text>
        </Box>
      </Card>
    </Box>
  </div>
);
export default Device;
