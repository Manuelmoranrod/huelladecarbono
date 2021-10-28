import React from "react";
import { shallow } from "enzyme";
import Track from "./Track";

describe("Track", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Track />);
    expect(wrapper).toMatchSnapshot();
  });
});
