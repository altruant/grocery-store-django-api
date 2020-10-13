import React, { Component } from 'react';

class Order extends Component {
  render() {
    return(
      <div className='OrderMenu'>
        <span className="iconify cart" data-icon="gridicons-cart" data-inline="false"></span>
        <div className="ordercontent">
          <div className="subtotal">
            <h5>Subtotal</h5>
            <h5>Price</h5>
          </div>
          <div className="tax">
            <h5>Tax</h5>
            <h5>Tax Price</h5>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h3>The Total</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Order
