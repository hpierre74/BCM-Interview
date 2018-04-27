import React from 'react';
import SocketAlert from "../SocketAlert/SocketAlert";
import OrdersLayout from "../../modules/OrdersBoard/components/OrdersLayout";

const Main = (props) => {
    return (
        <main>
          <OrdersLayout />
          <SocketAlert type="info" />
        </main>
    )
}
 
export default Main;