import React from "react";
import { Table } from "reactstrap";
import moment from "moment";

const OrdersTable = props => {
  const { orders } = props;
  const renderOrders = () => {
    return Object.values(orders).map((order, index) => {
      return (
        <tr key={index}>
          <td> {moment(order.datetime).format("DD/MM/YYYY HH:mm:ss")}</td>
          <td> {order.type} </td>
          <td> {order.volume} </td>
          <td> {order.price + " " + order.currency} </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <Table striped className="OrdersLayout">
        <thead>
          <tr className="OrdersLayout-header">
            <th>Date</th>
            <th>Order</th>
            <th>Volume</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{renderOrders()}</tbody>
      </Table>
    </div>
  );
};

export default OrdersTable;
