import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";
import moment from "moment";

const OrdersGraph = props => {

  // Unnecessary loop to improve user dates readability
  // Workaround / additional instructions about date displaying needed
  const groupDates = () => {
    const newData = [];
    Object.values(props.data).map((order, index) => {
      order.date = moment(order.datetime).format("DD/MM/YYYY");
      return newData.push(order);
    });
    return newData;
  };

  return (
    <div>
      <h1> {props.title} </h1>
      <LineChart
        width={window.innerWidth / 2.5}
        height={300}
        data={groupDates()}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Brush dataKey="date" height={30} stroke={props.primary} />
        <Line
          type="monotone"
          dataKey="price"
          stroke={props.primary}
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="datetime" stroke={props.secondary} />
      </LineChart>
    </div>
  );
};

export default OrdersGraph;
