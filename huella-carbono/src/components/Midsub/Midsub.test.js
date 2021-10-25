import React from "react";
import { shallow } from "enzyme";
import Midsub from "./Midsub";

describe("Midsub", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Midsub />);
    expect(wrapper).toMatchSnapshot();
  });
});
