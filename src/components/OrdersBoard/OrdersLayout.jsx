import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import OrdersTable from "./OrdersTable";
import OrdersPagination from "./OrdersPagination";
import OrdersGraph from "./OrdersGraph";
import OrdersNav from './OrdersNav';
import Orders from "../../services/Orders";

import './OrdersBoard.css';


class OrdersLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BUY: [],
      SELL: [],
      current:[],
      page:0
    };
    this.saveOrders = this.saveOrders.bind(this);
  }

  componentWillMount() {
    this.setOrders();
  }

  saveOrders(orders, type, isPage) {
    return isPage
      ? this.setState({
          current: orders
        })
      : this.setState({
          [type]: orders
        });
  }

  setOrders() {
    Orders.getOrders("ALL", this.saveOrders, this.state.page.toString());
    Orders.getOrders("BUY", this.saveOrders);
    Orders.getOrders("SELL", this.saveOrders);
  }  

  
  //Set the current Table page value
  paginate(e, page) {
    e.preventDefault();
    page = page < 0 ? page = 0 : page; // prevent overload
    Orders.getOrders("ALL", this.saveOrders, page.toString());
    this.setState({ page: page });
  }

  render() {
    return (
      <Container className='OrdersLayout' fluid>
        <Row>
          <Col style={{ backgroundColor: "#434449" }} sm="2" md="2" xs="2">
            <OrdersNav />
          </Col>
          <Col  sm="10" md="10" xs="10">
            <Row>
              <Col>
                <h2>Orders Board</h2>
                <OrdersTable
                  orders={this.state.current}
                />
                <OrdersPagination
                  page={this.state.page}
                  paginate={this.paginate.bind(this)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", flexFlow: "row wrap", justifyContent: 'center' }}>
                <OrdersGraph
                  title="Selling Orders"
                  primary="#FF5733"
                  secondary="#FF8A33"
                  data={this.state.SELL}
                />
                <OrdersGraph
                  title="Buying Orders"
                  primary="#8884d8"
                  secondary="#82ca9d"
                  data={this.state.BUY}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OrdersLayout;
