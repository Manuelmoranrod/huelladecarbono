import React from "react";
import { shallow } from "enzyme";
import House from "./House";

describe("House", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<House />);
    expect(wrapper).toMatchSnapshot();
  });
});
