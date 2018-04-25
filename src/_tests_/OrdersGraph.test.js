import OrdersGraph from '../components/OrdersBoard/OrdersGraph';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Orders from '../services/orders';
import mtz from 'moment-timezone';


let title="Buying Orders"
let primary="#8884d8";
let secondary="#82ca9d";
let data=[{
    datetime: mtz(new Date('2018/01/01 01:01:01').toISOString()).tz("Europe/Paris").format(),
    type: 'ALL',
    volume: 10,
    price: 2,
    currency: 'EUR'
}]

describe('OrdersGraph component renders the children correctly', () => {
    it('renders correctly', () => {  
        const rendered = renderer.create(
        <OrdersGraph 
            title={title}
            primary={primary}
            secondary={secondary}
            data={data}
        />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });
