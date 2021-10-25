import React from "react";
import { shallow } from "enzyme";
import Premiumsub from "./Premiumsub";

describe("Premiumsub", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Premiumsub />);
    expect(wrapper).toMatchSnapshot();
  });
});
