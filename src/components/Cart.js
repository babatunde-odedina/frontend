import { faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const Cart = ({
  cartItems,
  onSendOrder,
  sendOrders,
  onRemove,
  onAdd,
  clearCart,
  removeItem,
  handleChange,
  name,
  setTotal,
  setSendOrders,
  isLoading,
  error,
}) => {
  const [totalPrice, setTotalPrice] = useState('');
  let [color, setColor] = useState('#608a38');
  const [subtotalPrice, setSubTotalPrice] = useState('');

  useEffect(() => {
    setSubTotalPrice(itemsPrice);
    setTotalPrice(total);
    setTotal(total);
    // setNewPriceItem(newPrice);
    setSendOrders(false);
    console.log(totalPrice, subtotalPrice, cartItems);
  }, [cartItems]);

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const delivery = 50;
  const total = itemsPrice + delivery;

  console.log(cartItems);
  return (
    <section className='shopping-cart' id='cart'>
      <h3 className='sub-heading'>Your Food</h3>
      <h1 className='heading'>Item's in Cart</h1>
      {cartItems.length === 0 && <h3>No Food available, please add </h3>}
      {cartItems.length !== 0 && (
        <>
          <div className='box-container'>
            {cartItems.map((item) => {
              return (
                <div className='box' key={item.id}>
                  <FontAwesomeIcon
                    onClick={() => removeItem(item)}
                    icon={faTimes}
                  />
                  <img src={item.image} alt={item.title} />
                  <div className='content'>
                    <h3>{item.title} </h3>
                    <form action=''>
                      <span>Quantity:</span>
                      <input
                        type='number'
                        name=''
                        value={item.qty}
                        readOnly
                        id=''
                      />
                      <div onClick={() => onAdd(item)} className='add-btn'>
                        +
                      </div>
                      <div
                        onClick={() => onRemove(item)}
                        className='remove-btn'
                      >
                        -
                      </div>
                    </form>
                    <div className='price'>
                      &#8358;
                      {item.newPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className='btn' onClick={() => clearCart()}>
            <FontAwesomeIcon icon={faTimes} />
            Clear Cart
          </button>
          <br />
          <br />
          {error && <div> {error} </div>}
          {!isLoading ? (
            sendOrders === false ? (
              <div>
                <h1 className='heading'>Checkout your Cart</h1>
                <div className='cart-total'>
                  <h3>
                    subtotal :
                    <span>
                      &#8358;
                      {itemsPrice
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </h3>

                  <h3>
                    delivery :
                    <span>
                      &#8358;
                      {delivery
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </h3>
                  <h3>
                    Total :
                    <span>
                      &#8358;
                      {total
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                  </h3>

                  <form action=''>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      your name:{' '}
                    </span>
                    <input
                      type='text'
                      name=''
                      placeholder='enter your name'
                      style={{ padding: '10px' }}
                      onChange={handleChange}
                    />
                  </form>
                  <Link
                    to='#'
                    className={name === '' ? 'd-none' : 'btn'}
                    onClick={onSendOrder}
                  >
                    Send Order &#8358;
                    {total
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Link>
                </div>
              </div>
            ) : (
              <div className='cart-total'>
                <h2> Hi {name}, Your Order has been sent &#128512; </h2>
                <h3>
                  Proceed to Pay &#8358;
                  {total
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  to Anthony Victor <span>2089604762 </span> UBA
                </h3>
                <br />
                <h3>OR</h3>
                <br />
                <h3>
                  Proceed to Pay &#8358;
                  {total
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  to Okon Emmanuel Gift <span>0643666196 </span> GTB
                </h3>
              </div>
            )
          ) : (
            <div>
              <ClipLoader
                color={color}
                loading={isLoading}
                size={150}
                aria-label='Loading Spinner'
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Cart;
