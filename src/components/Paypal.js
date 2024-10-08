import React, { useEffect, useRef } from "react";

const PayPalButton = () => {
  const paypal = useRef();

  useEffect(() => {
    // const script = document.createElement("script");

    // script.src =
    //   "https://www.paypal.com/sdk/js?client-id=BAA-Xtnv2ebTiVzVcwUeczfIpczmbEtAHQcyskTq0W0ILnTJO7Mx3Ji5kcsItVdy2uNviTItTwvayAcz6A&currency=GBP";
    // script.async = true;

    // // Ensure the PayPal SDK is available before calling `paypal`
    // script.onload = () => {
    //   console.log("PayPal SDK loaded", script, window.paypal);
    //   if (window.paypal) {
    //     window.paypal
    //       .HostedButtons({
    //         hostedButtonId: "YY37FCHVDARYS",
    //       })
    //       .render(paypal.current);
    //   }
    // };
    window.paypal.Buttons({}).render(paypal.current);

    // document.body.appendChild(script);

    // return () => {
    //   // Clean up the script when the component unmounts
    //   document.body.removeChild(script);
    // };
  }, []);

  return <div ref={paypal} id="paypal-container-YY37FCHVDARYS"></div>;
};

export default PayPalButton;
