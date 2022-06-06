import React from "react";
import Device from "../Device/Device";
import useFetch from "../Utils/useFetch";
import imgSrc from "../../../../public/images/iphone.jpg";
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import { ChevronLeft } from "@tds/core-interactive-icon";
import { Link } from "react-router-dom";
import Box from "@tds/core-box";
const Iphones = () => {
  const { data, loading, error } = useFetch("http://localhost:8081/iphones");
  const devicesList = data.map(({ name, brand, price }) => (
    <FlexGrid.Col key={name} xs={12} sm={10} md={6} xl={4}>
      <Device name={name} brand={brand} price={`${price}`} imgSrc={imgSrc} />
    </FlexGrid.Col>
  ));
  return (
    <FlexGrid gutter={false}>
      <FlexGrid.Row horizontalAlign="start">
        <FlexGrid.Col xs={12}>
          <Box
            style={{ background: "#4b286d" }}
            inline
            vertical={2}
            horizontal={4}
            between={4}
          >
            <Link to="/">
              <ChevronLeft variant="inverted" />
            </Link>
            <Heading invert level="h3">
              Iphones
            </Heading>
          </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
      <FlexGrid.Row horizontalAlign="start">{devicesList}</FlexGrid.Row>
    </FlexGrid>
  );
};

export default Iphones;
