import React, { useState } from "react";
import tableImg from "../Images/table.jpg";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { products } from "../Product1";
import { FaStar } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/ActionCreator";
const Shop = () => {
  const dispatch = useDispatch();
  let arr1 = products.filter((ele) => {
    if (ele.category == "sofa") {
      return ele;
    }
  });
  let [state, setState] = useState(arr1);
  let dataHandler = (e) => {
    let targt = e.target.textContent.toLowerCase();
    arr1 = products.filter((ele) => {
      if (ele.category == targt) {
        return ele;
      }
    });
    setState(arr1);
  };

  let inputHandel = (e) => {
    let target = e.target.value;
    let arr2 = products.filter((ele) => {
      if (
        (ele.category.includes(target) && target.length) ||
        (ele.productName.includes(target) && target.length)
      ) {
        return ele;
      }
    });
    setState(arr2);
    if (target.length) {
      setState(arr2);
    } else {
      setState(arr1);
    }
  };
  let styleing = {
    style: {
      backgroundImage: `url(${tableImg})`,
      height: "280px",
      backgroundRepeat: "no-repeat",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontSize: "2em",
      fontWeight: "600",
      color: "white",
    },
    style1: {
      backgroundColor: "black",
      opacity: "0.6",
      height: "100%",
    },
  };
  return (
    <>
      <div style={styleing.style}>
        <div
          style={styleing.style1}
          className="d-flex flex-wrap justify-content-center align-content-center"
        >
          product
        </div>
      </div>

      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row row-cols-2 gx-5">
          <div className="col-3 d-flex justify-content-start">
            <div className="dropdown" style={{ width: "90%" }}>
              <div
                className="btn p-0 d-flex justify-content-between  text-white"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#0F3460", height: "45px" }}
              >
                <div
                  className="d-flex ms-3 flex-column justify-content-center"
                  style={{ fontSize: "1.05em" }}
                >
                  Filter By Category
                </div>
                <div
                  className="fs-4 d-flex flex-wrap justify-content-center align-content-center"
                  style={{ color: "#C2C5D4" }}
                >
                  <span className="pb-2 ms-2">|</span>
                  {<RiArrowDropDownLine className="fs-1 pt-1" />}
                </div>
              </div>
              <ul
                className="dropdown-menu"
                style={{ width: "100%" }}
                onClick={dataHandler}
              >
                <li>
                  <a className="btn dropdown-item">Sofa</a>
                </li>
                <li>
                  <a className="btn dropdown-item">Chair</a>
                </li>
                <li>
                  <a className="btn dropdown-item">Watch</a>
                </li>
                <li>
                  <a className="btn dropdown-item">Mobile</a>
                </li>
                <li>
                  <a className="btn dropdown-item">Wireless</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-9 d-flex justify-content-end fw-bold flex-wrap align-content-center">
            <input
              className="border rounded-5 p-3"
              style={{
                height: "40px",
                width: "85%",
                backgroundColor: "#F2F2F2",
              }}
              placeholder="Search..."
              onChange={inputHandel}
            />
            <IoSearch
              className="position-relative fs-5"
              style={{ top: "11.5px", right: "33px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="mt-1 d-flex justify-content-center container"
        style={{ height: "auto", marginBottom: "60px" }}
      >
        <div className="row row-cols-3 g-3 w-75 justify-content-center">
          {state.length ? (
            state.map((ele) => (
              <div className="col" style={{ height: "380px" }} key={ele.id}>
                <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                  <div
                    className="text-center"
                    style={{ height: "150px", width: "100%" }}
                  >
                    <Link to={`/product/${ele.id}`}>
                      <img
                        src={`${ele.imgUrl}`}
                        className="w-75 h-100 object-fit-contain"
                      />
                    </Link>
                  </div>
                  <div
                    className=" w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center"
                    style={{ fontSize: "1.1em", height: "50px" }}
                  >
                    {ele.productName}
                  </div>
                  <div className=" text-warning ms-4 mb-3">
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                    <FaStar className="mx-1" />
                    <FaStar />
                  </div>
                  <div
                    className="d-flex  justify-content-between ms-4 me-4"
                    style={{ height: "35px" }}
                  >
                    <div className="fs-4 fw-semibold ">${ele.price}</div>
                    <button
                      className="addBtn rounded-circle border btn  fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                      onClick={() => dispatch(add_to_cart(ele))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-danger mt-5">No Data Found</h3>
          )}
        </div>
      </div>

      <div
        className="d-flex flex-column justify-content-center"
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
    </>
  );
};

export default Shop;
