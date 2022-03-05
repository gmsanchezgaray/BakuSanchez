import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import {
  CheckoutInfo,
  CheckoutSubtitle,
  CheckoutTitle,
  WrapperSummaryInfo,
} from "./OrderSummary.elements";

import { CartContext } from "../../context/CartContext";
import { shippingChoice } from "../../utils/information";
import OrderForm from "../OrderForm";

const OrderSummary = () => {
  const { cart, calculateTotalPrice } = useContext(CartContext);
  const [isLoading, setIsLoading] = useOutletContext();

  const [promoCodeError, setPromoCodeError] = useState(true);
  const [promoAlert, setPromoAlert] = useState(false);
  const [shippingCost, setShippingCost] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [indexArray, setIndexArray] = useState("");
  const totalPriceReference = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
    setShippingCost(shippingChoice[indexArray]);
    console.log(indexArray);
  }, [indexArray, setIsLoading]);

  const handleInput = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    setPromoAlert(true);
    if (promoCode === "030355556") {
      setPromoCodeError(false);
    }
  };

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <CheckoutInfo>
      {!isLoading ? (
        <>
          <CheckoutTitle>Order summary</CheckoutTitle>
          <WrapperSummaryInfo>
            <CheckoutSubtitle>Items {cart.length}</CheckoutSubtitle>
            <CheckoutSubtitle>
              {numberFormat.format(calculateTotalPrice())}
            </CheckoutSubtitle>
          </WrapperSummaryInfo>
          <OrderForm
            setIndexArray={setIndexArray}
            promoCode={promoCode}
            handleInput={handleInput}
            checkPromoCode={checkPromoCode}
            promoAlert={promoAlert}
            promoCodeError={promoCodeError}
            totalPriceReference={totalPriceReference}
            numberFormat={numberFormat}
            shippingCost={shippingCost}
            navigate={navigate}
          />
        </>
      ) : null}
    </CheckoutInfo>
  );
};

export default OrderSummary;
