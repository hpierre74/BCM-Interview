import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import OrdersTable from "./OrdersTable";
import OrdersPagination from "./OrdersPagination";
import OrdersGraph from "./OrdersGraph";

class OrdersLayout extends Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      page: 0,
      allOrders: [],
      isPaginationVisible: false,
      chunkedOrders: [],
      sellOrders: [],
      buyOrders: []
    };
    this.req = axios.create({
      baseURL: "http://localhost:3001/orders/"
    });
    //I skipped pagination requests as it wasn't technically hard to implement
    //I would normally use the pagination or set data in session/cache/cookies
    //to avoid multiple requests
    //this.paging = "?page=" + this.state.page;
  }

  componentWillMount() {
    this.setOrders();
  }

  setOrders() {
    this.getOrders("ALL", "allOrders");
    this.getOrders("SELL", "sellOrders");
    this.getOrders("BUY", "buyOrders");
  }

  getOrders(type, state) {
    this.req
      .get(type)
      .then(res => {
        return this.setState(
          {
            [state]: res.data.orders
          },
          () => {
            return state === "allOrders"
              ? this.chunkOrders(res.data.orders)
              : "";
          }
        );
      })
      .catch(err => console.log(err));
  }

  //Set the current Table page value
  paginate(e, page) {
    e.preventDefault();
    this.setState({ page: page });
  }

  //toggle Pagination links visibility
  displayPagination(e) {
    e.preventDefault();
    this.setState({ isPaginationVisible: !this.state.isPaginationVisible });
  }

  //Change the array to multiple ones with length relying on given chunk_size param
  chunkArray(myArray, chunk_size) {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

  chunkOrders(orders) {
    return this.setState({ chunkedOrders: this.chunkArray(orders, 10) });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: "#434449" }} sm="2" md="2" xs="2">
            Orders...
          </Col>
          <Col>
            <Row>
              <Col>
                <OrdersTable
                  orders={
                    this.state.chunkedOrders[this.state.page]
                      ? this.state.chunkedOrders[this.state.page]
                      : []
                  }
                />
                <OrdersPagination
                  isVisible={this.state.isPaginationVisible}
                  displayPagination={this.displayPagination.bind(this)}
                  page={this.state.page}
                  paginate={this.paginate.bind(this)}
                  orders={this.state.chunkedOrders}
                />
              </Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", flexFlow: "row wrap" }}>
                <OrdersGraph
                  title="Selling Orders"
                  primary="#FF5733"
                  secondary="#FF8A33"
                  data={this.state.sellOrders}
                />
                <OrdersGraph
                  title="Buying Orders"
                  primary="#8884d8"
                  secondary="#82ca9d"
                  data={this.state.buyOrders}
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
