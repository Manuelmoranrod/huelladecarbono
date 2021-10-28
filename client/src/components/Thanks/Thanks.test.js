import React from "react";
import { shallow } from "enzyme";
import Thanks from "./Thanks";

describe("Thanks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Thanks />);
    expect(wrapper).toMatchSnapshot();
  });
});
