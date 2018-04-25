import OrdersLayout from '../components/OrdersBoard/OrdersLayout';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Orders from '../services/orders';


describe('OrdersLayout component renders the children correctly', () => {
    it('renders correctly', () => {  
        const rendered = renderer.create(
        <OrdersLayout />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });
