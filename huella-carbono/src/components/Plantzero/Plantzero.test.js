import React from "react";
import { shallow } from "enzyme";
import Plantzero from "./Plantzero";

describe("Plantzero", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Plantzero />);
    expect(wrapper).toMatchSnapshot();
  });
});
