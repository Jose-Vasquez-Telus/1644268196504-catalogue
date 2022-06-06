import React from "react";
import { shallow } from "enzyme";
import Device from "../components/Device/Device";

describe("Device component", () => {
  const minProps = {
    name: "device-name",
    brand: "device-brand",
    price: "529",
    imgSrc: "image-source",
  };

  const wrapper = shallow(<Device {...minProps} />);

  it("should render Device name", () => {
    const headdingName = wrapper.find('[testid="heading-name"]');
    expect(headdingName.text().includes(minProps.name)).toBe(true);
  });

  it("should render Device Brand", () => {
    const headdingBrand = wrapper.find('[testid="heading-brand"]');
    expect(headdingBrand.text().includes(minProps.brand)).toBe(true);
  });

  it("should render Device image", () => {
    const image = wrapper.find('[testid="image"]');
    expect(image.prop("src")).toBe(minProps.imgSrc);
  });

  it("should render Device Price", () => {
    const priceLockup = wrapper
      .find('[testid="price-lockup"]')
      .dive()
      .find('[data-testid="priceValue"]')
      .first();
    expect(priceLockup.text().includes(minProps.price)).toBe(true);
  });
});
