import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";
import mtz from "moment-timezone";
import PropTypes from 'prop-types';


const OrdersGraph = props => {
  // Add readable date entry to improve readability
  const groupDates = () => {
    const newData = [];
    Object.values(props.data).map((order, index) => {
      order.date = mtz(order.datetime)
        .tz("Europe/Paris")
        .format("DD/MM/YYYY HH:mm");
      return newData.push(order);
    });
    return newData;
  };

  return (
    <div>
      <h1> {props.title} </h1>
      <AreaChart
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
        <Area
          type="monotone"
          dataKey="price"
          stroke={props.primary}
          activeDot={{ r: 8 }}
          fill={props.secondary}
        />
        <Area type="monotone" dataKey="datetime" stroke={props.secondary} />
      </AreaChart>
    </div>
  );
};

OrdersGraph.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.shape({
      datetime: PropTypes.instanceOf(Date),
      type: PropTypes.string,
      volume: PropTypes.number,
      currency: PropTypes.string
    }),
    PropTypes.array
  ]).isRequired
}
export default OrdersGraph;
