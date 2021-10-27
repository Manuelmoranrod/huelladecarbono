import React from "react";
import { shallow } from "enzyme";
import Zero from "./Zero";

describe("Zero", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Zero />);
    expect(wrapper).toMatchSnapshot();
  });
});
