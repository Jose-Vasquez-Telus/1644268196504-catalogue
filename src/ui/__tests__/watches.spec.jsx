import React from "react";
import { shallow } from "enzyme";
import Watches from "../components/Watches/Watches";
import Device from "../components/Device/Device";

beforeEach(() => {
  fetch.resetMocks();
});

describe("watches component", async () => {
  const wrapper = shallow(<Watches />);

  fetch.mockResponseOnce(
    JSON.stringify({
      json: () =>
        Promise.resolve({
          data: [
            {
              name: "Apple Watch Series 6",
              brand: "Apple",
              price: 529,
            },
            {
              name: "Apple Watch SE",
              brand: "Apple",
              price: 369,
            },
            {
              name: "Apple Watch Series 3",
              brand: "Apple",
              price: 259,
            },
          ],
        }),
    })
  );

  it("should render Devices component", async () => {
    const devices = wrapper.find(Device);
    setTimeout(() => expect(devices.toHaveLength(3)), 300);
  });
});
