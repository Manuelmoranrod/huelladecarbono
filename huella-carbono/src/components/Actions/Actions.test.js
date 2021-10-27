import React from "react";
import { shallow } from "enzyme";
import Actions from "./Actions";

describe("Actions", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Actions />);
    expect(wrapper).toMatchSnapshot();
  });
});
