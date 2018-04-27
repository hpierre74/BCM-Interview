import OrdersNav from '../components/OrdersNav';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';


describe('OrdersNav component renders the children correctly', () => {
    it('renders correctly', () => {  
        const rendered = renderer.create(
        <OrdersNav />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  });
