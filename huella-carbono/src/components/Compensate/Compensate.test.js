import React from "react";
import { shallow } from "enzyme";
import Compensate from "./Compensate";

describe("Compensate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Compensate />);
    expect(wrapper).toMatchSnapshot();
  });
});
