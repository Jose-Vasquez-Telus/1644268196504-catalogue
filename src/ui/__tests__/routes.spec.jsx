import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import Watches from "../components/Watches/Watches";
import Iphones from "../components/Iphones/Iphones";

describe("Application routes", () => {
  test("Home should render", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  // test("watches should render", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/watches"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.dive().find(Watches)).toHaveLength(1);
  // });

  // test("iphones should render", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/iphones"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(Iphones)).toHaveLength(1);
  // });
});
