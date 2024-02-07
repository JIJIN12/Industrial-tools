import React, { createContext, useState, useEffect } from "react";
import { allitemdetails } from "../redux/slice/shopcategoryslice";
import { useDispatch, useSelector } from "react-redux";

export const ShpContext = createContext(null);

const useDefaultCart = () => {
  const dispatch = useDispatch();
    const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);

  useEffect(() => {
    dispatch(allitemdetails());
  }, [dispatch]);
  const [cartitem, set_cartitem] = useState([]);

  useEffect(() => {
    if (allitem_data) {
      let cart = [1];
      for (let i = 1; i < allitem_data.length; i++) {
        cart[i] = 0;
      }
      set_cartitem(cart);
    }
  }, [allitem_data]);

  return cartitem;
};

const ShopContextProvider = (props) => {
  const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);

  useEffect(() => {
    dispatch(allitemdetails());
  }, [dispatch]);

  const cartitem = useDefaultCart(allitem_data);

  const contextvalue = { allitem_data, cartitem };

  return (
    <ShpContext.Provider value={contextvalue}>
      {props.children}
    </ShpContext.Provider>
  );
};

export default ShopContextProvider;
