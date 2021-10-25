import React from "react";
import { shallow } from "enzyme";
import Lowsub from "./Lowsub";

describe("Lowsub", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lowsub />);
    expect(wrapper).toMatchSnapshot();
  });
});
