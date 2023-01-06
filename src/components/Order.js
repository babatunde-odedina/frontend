import React, { useEffect, useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost4000/api/orders');
      const json = await response.json();

      if (response.ok) {
        setOrders(json);
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className='order' id='order'>
      <h3 className='sub-heading'>order now</h3>
      <h1 className='heading'>free and fast</h1>

      <div className='container'>
        {orders &&
          orders.map((order) => {
            <p hey={order.id}>{order.name}</p>;
          })}
      </div>
    </section>
  );
};

export default Order;
