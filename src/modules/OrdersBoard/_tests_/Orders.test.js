import React from 'react';
import Orders from '../../../services/Orders';

let cb = () => {
    return;
}

it('works with async/await', async () => {
    expect.assertions(1);
    const data = await Orders.getOrders('ALL', cb, "0" )
    .then(res => {
    })
    .catch(err => {throw new Error(err)});
    expect(data).toBe(undefined);
  });