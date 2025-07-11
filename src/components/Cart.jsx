import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillShopping } from "react-icons/ai";
import {
  add_to_cart,
  remove_from_cart,
  single_remove_to_cart,
} from "../redux/ActionCreator";

const Cart = () => {
  let dispatch = useDispatch();
  const cartInfo = useSelector((state) => state);
  let data = cartInfo.Product_Data.cartData;
  let total = data.reduce((acc, ele) => {
    return acc + ele.price * ele.quan;
  }, 0);
  return (
    <div style={{ backgroundColor: "#F5F8FD" }}>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-8 mt-4">
            {data.length ? (
              data.map((ele) => (
                <div
                  className="border d-flex justify-content-between mt-4 bg-white"
                  style={{ height: "150px" }}
                  key={ele.id}
                >
                  <div
                    className="h-100 d-flex flex-column justify-content-center"
                    style={{ width: "30%" }}
                  >
                    <div className="h-75 w-100">
                      <img
                        src={`${ele.imgUrl}`}
                        className="object-fit-contain h-100 w-100"
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-around p-1 ms-3 my-1"
                    style={{ width: "55%" }}
                  >
                    <h5>{ele.productName}</h5>
                    <div
                      className="d-flex justify-content-between fw-semibold"
                      style={{ fontSize: "1.1em", width: "35%" }}
                    >
                      <span style={{ color: "#7D756B" }}>
                        ${ele.price}*{ele.quan}
                      </span>
                      <span style={{ color: "#132D68" }}>
                        ${ele.price * ele.quan}
                      </span>
                    </div>
                  </div>

                  <div
                    className="p-2 d-flex flex-column justify-content-around"
                    style={{ width: "20%" }}
                  >
                    <h4
                      className="text-end"
                      style={{ height: "30px", cursor: "pointer" }}
                      onClick={() => dispatch(remove_from_cart(ele.id))}
                    >
                      X
                    </h4>
                    <div
                      className="d-flex fs-2  mt-5 mb-5"
                      style={{ width: "60%", height: "38px" }}
                    >
                      <div
                        className="me-2 rounded border h-100 d-flex flex-column justify-content-center flex-wrap align-content-center pb-1"
                        style={{ width: "45px", cursor: "pointer" }}
                        onClick={() => dispatch(add_to_cart(ele))}
                      >
                        +
                      </div>
                      <div
                        className="border rounded h-100 d-flex flex-column justify-content-center flex-wrap align-content-center pb-1"
                        style={{
                          width: "45px",
                          backgroundColor: "#F5F8FD",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          dispatch(
                            ele.quan == 1
                              ? remove_from_cart(ele.id)
                              : single_remove_to_cart(ele.id)
                          )
                        }
                      >
                        -
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h3
                className="text-end text-danger"
                style={{ paddingRight: "90px" }}
              >
                Cart is empty
              </h3>
            )}
          </div>
          <div className="col-4 mt-4 " style={{ height: "140px" }}>
            <div className="border h-100 mt-4 bg-white p-4">
              <div className="fs-5 fw-semibold" style={{ color: "#132D68" }}>
                Cart Summary
              </div>

              <div>
                <hr />
              </div>
              <div className="fs-5">Total Price: ${total}</div>
            </div>
          </div>
        </div>
      </div>

      {/*Footer Section*/}
      <div
        className="d-flex flex-column justify-content-center mt-5"
        style={{ height: "400px", backgroundColor: "#0F3460" }}
      >
        <div className="container">
          <div className="row row-cols-4">
            <div>
              <h3 className="text-white fw-bold d-flex flex-wrap align-content-center p-2">
                <span className="d-flex flex-wrap align-content-center">
                  {<AiFillShopping />}
                </span>
                Mart
              </h3>
              <p
                style={{ color: "#7395BA", lineHeight: "28px" }}
                className="fw-semibold px-2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                rutrum elementum diam, sed rhoncus lorem malesuada vitae.
                Vestibulum vitae nulla massa. Cras vitae quam quam. Duis porta,
                diam in.
              </p>
            </div>

            <div>
              <h4 className="text-white p-2">About Us</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "40px",
                }}
                className="px-2 fs-5 fw-semibold"
              >
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white p-2">Customer Care</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "40px",
                }}
                className="px-2 fs-5 fw-semibold"
              >
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white p-2">Contact Us</h4>
              <ul
                style={{
                  listStyle: "none",
                  color: "#7395BA",
                  lineHeight: "35px",
                  fontSize: "0.98em",
                }}
                className="px-2 fw-semibold"
              >
                <li>
                  70 Washington Square South, New York, NY 10012, United States
                </li>
                <li>Email: abhilash.vc888@gmail.com</li>
                <li>Phone: +919538450441</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
