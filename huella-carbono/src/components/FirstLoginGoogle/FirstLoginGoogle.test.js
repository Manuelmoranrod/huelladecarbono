import React from "react";
import { shallow } from "enzyme";
import FirstLoginGoogle from "./FirstLoginGoogle";

describe("FirstLoginGoogle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FirstLoginGoogle />);
    expect(wrapper).toMatchSnapshot();
  });
});
