import React from "react";
import { Table } from "reactstrap";
import mtz from "moment-timezone";
import PropTypes from 'prop-types';

const OrdersTable = props => {
  const { orders } = props;
  const renderOrders = () => {
    return Object.values(orders).map((order, index) => {
      return (
        <tr key={index}>
          <td> {mtz(order.datetime).tz("Europe/Paris").format("DD/MM/YYYY HH:mm:ss")}</td>
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

OrdersTable.propTypes = {
  orders: PropTypes.oneOfType([
    PropTypes.shape({
      datetime: PropTypes.instanceOf(Date),
      type: PropTypes.string,
      volume: PropTypes.number,
      price: PropTypes.number,
      currency: PropTypes.string
    }),
    PropTypes.array
  ]).isRequired
}

export default OrdersTable;
