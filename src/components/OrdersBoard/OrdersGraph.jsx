import React from "react";
import {
  ComposedChart,
  Line, 
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
    <div style={{justifyContent: 'center'}}>
      <h4> {props.title} </h4>
      <ComposedChart
        width={window.innerWidth > 1200 ? 500 : window.innerWidth > 700 ? 700 : 500}
        height={300}
        data={groupDates()}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        style={{margin: '5px auto'}}
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
        {/* <Line type="monotone" dataKey="volume" stroke={props.secondary} dot={false} /> */}
      </ComposedChart>
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
