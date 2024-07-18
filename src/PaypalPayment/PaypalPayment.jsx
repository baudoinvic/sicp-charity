// import React from "react";
// import { PayPalButton } from "react-paypal-button-v2";

// const PaypalPayment = () => {
//   const createOrder = () => {
//     return fetch("/my-server/create-paypal-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cart: [
//           {
//             sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
//             quantity: "YOUR_PRODUCT_QUANTITY",
//           },
//         ],
//       }),
//     })
//       .then((response) => response.json())
//       .then((order) => order.id);
//   };

//   const onApprove = (data) => {
//     return fetch("/my-server/capture-paypal-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         orderID: data.orderID,
//       }),
//     }).then((response) => response.json());
//   };

//   return (
//     <div>
//       <PayPalButton
//         createOrder={(data, actions) => createOrder(data, actions)}
//         onApprove={(data, actions) => onApprove(data, actions)}
//       />
//     </div>
//   );
// };

// export default PaypalPayment;
