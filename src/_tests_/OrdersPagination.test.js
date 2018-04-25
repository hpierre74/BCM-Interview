import OrdersPagination from "../components/OrdersBoard/OrdersPagination";
import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Orders from "../services/orders";


let paginate = () => {
    return;
}
let page = 0;


describe("OrdersPagination component renders the children correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(
      <OrdersPagination paginate={paginate} page={page} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
