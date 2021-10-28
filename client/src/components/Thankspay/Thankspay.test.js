import React from "react";
import { shallow } from "enzyme";
import Thankspay from "./Thankspay";

describe("Thankspay", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Thankspay />);
    expect(wrapper).toMatchSnapshot();
  });
});
