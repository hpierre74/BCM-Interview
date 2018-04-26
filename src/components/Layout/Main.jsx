import React from 'react';
import SocketAlert from "../SocketAlert/SocketAlert";
import OrdersLayout from "../OrdersBoard/OrdersLayout";

const Main = (props) => {
    return (
        <main>
          <OrdersLayout />
          <SocketAlert type="info" />
        </main>
    )
}
 
export default Main;