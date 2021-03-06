import React from "react";

const Cart = ({ cart }) => {
  // get total price
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }

  // charge
  let shipping = 0;
  if (total > 75) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  // tex just total theke 10% bahir korla.
  const tax = Math.round((total / 100) * 10);

  // total price with tax and shipping.
  const grandTotal = (total + shipping + tax).toFixed(2);
  return (
    <div>
      <h4>Order Summery </h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price : {total.toFixed(2)}</p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>Tax + VAT : {tax}</small>
      </p>
      <p>Total Price : {grandTotal}</p>
    </div>
  );
};

export default Cart;
