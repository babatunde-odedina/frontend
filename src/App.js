import { useEffect, useRef, useState } from 'react';
import './App.css';
import Regular from './components/Regular';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {
  homeImages,
  proteinData,
  swallowData,
  regularData,
  soupData,
  data,
} from './Data';
import { BrowserRouter as Router } from 'react-router-dom';
import Swallow from './components/Swallow';
import Protein from './components/Protein';
import Cart from './components/Cart';
import Soup from './components/Soup';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [sendOrders, setSendOrders] = useState(false);
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);

    console.log('value is:', event.target.value);
  };

  const onSendOrder = async (e) => {
    e.preventDefault();
    const orders = cartItems.map((item) => {
      return {
        food: `${item.title}`,
        price: `${item.newPrice}`,
      };
    });
    console.log(orders);
    setIsLoading(true);

    const res = await fetch(
      'https://lorifoodappbackend.onrender.com/api/orders',
      {
        method: 'POST',
        body: JSON.stringify({ name, orders, total }),
        headers: [['Content-Type', 'application/json']],
      }
    );

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setSendOrders(false);
      console.log('error is made');
      setIsLoading(false);
    }

    if (res.ok) {
      setError(null);
      console.log('New order added');
      setSendOrders(true);
      setIsLoading(false);
    }
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
                newPrice: (exist.qty + 1) * x.price,
              }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                qty: exist.qty - 1,
                newPrice: (exist.qty - 1) * x.price,
              }
            : x
        )
      );
    }
  };

  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty >= 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItems([]);
    setName('');
    setTotal('');
    setIsLoading(false);
    setSendOrders(false);
  };

  return (
    <Router>
      <div>
        <Header countCartItem={cartItems.length} />
        <Home slides={homeImages} />
        <Regular dishes={regularData} onAdd={onAdd} />
        {/* <About /> */}
        <Swallow items={swallowData} onAdd={onAdd} />
        <Soup items={soupData} onAdd={onAdd} />
        <Protein items={proteinData} onAdd={onAdd} />
        <Cart
          item={data}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          clearCart={clearCart}
          removeItem={removeItem}
          onSendOrder={onSendOrder}
          sendOrders={sendOrders}
          handleChange={handleChange}
          name={name}
          setTotal={setTotal}
          setSendOrders={setSendOrders}
          isLoading={isLoading}
          error={error}
        />
        {/* <Review people={reviewData} /> */}
        {/* <Order /> */}
        <Footer />
      </div>
    </Router>
  );
}
export default App;
