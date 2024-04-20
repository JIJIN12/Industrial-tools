import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Cartitems.css";
export default function Cartitems() {
  const [cartitems, set_cartitems] = useState([]);
  const [carttotal, set_carttotal] = useState([]);
  console.log(carttotal);
  console.log(cartitems);

  const updateCartData = async () => {
    await axios
      .get("http://localhost:1000/cart")
      .then((response) => {
        set_cartitems(response.data.details);
        // Recalculate total price whenever cart data changes
        const newTotalPrice = response.data.details.reduce((total, data) => {
          const cleanedValue = data.new_price.replace(/[^0-9.]/g, "");

          // Convert to a number
          const newPriceAsNumber = Number(cleanedValue);
          const productTotal = data.quantity * newPriceAsNumber;
          return total + productTotal;
        }, 0);
        set_carttotal(newTotalPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    updateCartData();
  }, []);

  const increment = (id) => {
    axios
      .post(`http://localhost:1000/cart/incre/${id}`)
      .then((response) => {
        console.log(response.data.details);
        updateCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decrement = (id) => {
    axios
      .post(`http://localhost:1000/cart/decre/${id}`)
      .then((response) => {
        console.log(response.data.details);
        updateCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removecart = async (id) => {
    await axios
      .post(`http://localhost:1000/cart/delete/${id}`)
      .then((Response) => {
        console.log(Response.data.details);
        updateCartData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="caritems mx-[120px] my-[100px]">
      <div className="cartitems-title grid grid-cols-6 items-center gap-[75px] px-[0] py-[20px] text-[#454545] text-[18px] font-semibold">
        <p className="col-span-1">Products</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Qunatity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1">Remove</p>
      </div>
      <hr className="h-[3px] bg-[#c6c4c4] border-0" />
      {cartitems.map((data, key) => (
        <div className="">
          <div className="cartitems-product grid grid-cols-6 items-center gap-[75px] px-[0]  text-[#454545] text-[14px] font-semibold">
            <img
              src={data.image}
              className=" cartitems-product-img  w-[60px]"
            />
            <p>
              {data.popular_name
                ? `${data.popular_name.substring(0, 29)}.`
                : data.relatedproduct_name.substring(0,42)}..
            </p>
            {/* <p>{data.popular_name}</p> */}
            <p>{data.new_price}</p>
            {/* <button className="">{data.quantity}</button> */}
            <div className="cartitem-number flex justify-start  h-fit">
              <button
                className="cartitem-decre border-2 border-r-0 border-slate-200 p-3 bg-slate-300 "
                onClick={() => {
                  decrement(data._id);
                  // Update local state for the decremented item
                  set_cartitems((prevCartData) => {
                    return prevCartData.map((item) =>
                      item._id === data._id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                    );
                  });
                }}
              >
                -
              </button>

              <input
                type="text"
                id="number"
                name="quantity"
                value={data.quantity}
                className="border-2 border-slate-200 w-9 pl-3"
              />
              <button
                className="cartitem-incre border-2 border-l-0 border-slate-200 p-3 bg-slate-300 "
                onClick={() => {
                  increment(data._id);
                  // Update local state for the incremented item
                  set_cartitems((prevCartData) => {
                    return prevCartData.map((item) =>
                      item._id === data._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                  });
                }}
              >
                +
              </button>
            </div>
            <p>
              ${data.quantity * Number(data.new_price.replace(/[^0-9.]/g, ""))}
            </p>
            <img
              src="./images/delete (1).png"
              className="cartitem-removeicon"
              onClick={() => {
                removecart(data._id);
              }}
            />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-cart-details flex my-[100px]">
        <div className="cartitems-carttotal flex-1 flex flex-col mr-[200px] gap-[20px]">
          <h1>Cart Totals</h1>
          <div className="flex justify-between px-[20px]">
            <p>Subtotal</p>
            <p>${carttotal}</p>
          </div>
          <hr />
          <div className="cartitems-fee flex justify-between px-[16px] ">
            <p>Shipping fee</p>
            <p>FREE</p>
          </div>
          <hr />
          <div className="cartitems-total flex justify-between px-[15px]">
            <h3>Total</h3>
            <h3>${carttotal}</h3>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-[16px] font-semibold">
          <p className="text-[#555]">If you have a promo code,Enter it here</p>
          <div className="cartitems-input flex w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
