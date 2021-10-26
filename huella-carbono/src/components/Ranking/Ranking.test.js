import React from "react";
import { shallow } from "enzyme";
import Ranking from "./Ranking";

describe("Ranking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ranking />);
    expect(wrapper).toMatchSnapshot();
  });
});
