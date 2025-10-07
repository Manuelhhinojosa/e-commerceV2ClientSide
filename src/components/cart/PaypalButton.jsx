// paypal
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// Paypalbutton function component
const PaypalButton = ({ amount, onSuccess, onError }) => {
  // return
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "Ac_1_TKVDXpsAYqlLBE9Q15KNd4xstFuZOoapsudfW-ZEBB2I5BhLmzLthTlue1FGtjb9QD6CDhBO374",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
