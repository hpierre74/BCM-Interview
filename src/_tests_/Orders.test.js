import React from 'react';
import Orders from '../services/Orders';

let cb = () => {
    new Promise();
}

it('works with async/await', async () => {
    expect.assertions(1);
    const data = await Orders.getOrders('ALL', cb, "0" );
    expect(data).toBe(undefined);
  });