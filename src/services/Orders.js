import axios from "axios";

const orderInstance = axios.create({
  baseURL: "http://localhost:3001/orders/"
});

class Orders {
  static getOrders(type, cb, page) {
    return page
      ? orderInstance
          .get(type + "?page=" + page)
          .then(res => {
            return page
              ? cb(res.data.orders, type, true)
              : cb(res.data.orders, type, false);
          })
          .catch(err => console.log(err))
      : orderInstance
          .get(type)
          .then(res => {
            return cb(res.data.orders, type);
          })
          .catch(err => console.log(err));
  }
}
export default Orders;
