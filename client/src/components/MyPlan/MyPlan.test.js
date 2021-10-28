import React from "react";
import { shallow } from "enzyme";
import MyPlan from "./MyPlan";

describe("MyPlan", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyPlan />);
    expect(wrapper).toMatchSnapshot();
  });
});
