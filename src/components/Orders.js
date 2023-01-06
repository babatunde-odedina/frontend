import React from 'react';

const Orders = () => {
  return (
    <section className='order' id='order'>
      <h3 className='sub-heading'>All Orders Made</h3>
      <h1 className='heading'>free and fast</h1>

      <form action=''>
        <div className='inputBox'>
          <div className='input'>
            <span>your name</span>
            <input type='text' name='' placeholder='enter your name' />
          </div>
          <div className='input'>
            <span>your number</span>
            <input type='number' name='' placeholder='enter your number' />
          </div>
        </div>
        <div className='inputBox'>
          <div className='input'>
            <span>how many</span>
            <input type='text' name='' placeholder='how many orders' />
          </div>
          <div className='input'>
            <span>date and time</span>
            <input type='datetime-local' />
          </div>
        </div>
        <div className='inputBox'>
          <div className='input'>
            <span>your address</span>
            <textarea
              name=''
              placeholder='enter your address'
              id=''
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <div className='input'>
            <span>your message</span>
            <textarea
              name=''
              placeholder='enter your message'
              id=''
              cols='30'
              rows='10'
            ></textarea>
          </div>
        </div>

        <input type='submit' value='order now' className='btn' />
      </form>
    </section>
  );
};

export default Orders;
