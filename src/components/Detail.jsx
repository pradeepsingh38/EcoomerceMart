import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../Product1";
import tableImg from "../Images/table.jpg";
import { FaStar } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/ActionCreator";
const Detail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let singleProduct = products.filter((ele) => {
    if (ele.id == id) {
      return ele;
    }
  });

  let cate = singleProduct[0].category;
  let similarData = products.filter((ele) => {
    if (ele.category == cate) {
      return ele;
    }
  });
  let changeData = useRef(null);
  let desc = useRef(null);
  let revew = useRef(null);
  let descHandeler = (e) => {
    e.target.style.color = "black";
    changeData.current.textContent = `${singleProduct[0].description}`;
    revew.current.style.color = "#999999";
  };
  let rewHandeler = (e) => {
    e.target.style.color = "black";
    changeData.current.textContent = "";
    singleProduct[0].reviews.map((ele) => {
      let div = document.createElement("div");

      let x = `
       <div>John Doe</div>
       <div class="text-warning">${ele.rating} (rating)</div>
       <div>${ele.text}</div>
       `;
      div.innerHTML = x;
      changeData.current.appendChild(div);
      desc.current.style.color = "#999999";
    });
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
          {singleProduct[0].productName}
        </div>
      </div>
      {/*product detail section*/}
      <div className="container mt-1 mb-5" style={{ height: "450px" }}>
        <div className="row row-cols-2 h-100">
          <div className="col h-100 d-flex flex-column justify-content-center">
            <div style={{ height: "320px" }}>
              <img
                src={singleProduct[0].imgUrl}
                className="object-fit-contain"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          <div className="col h-100  d-flex flex-column justify-content-center">
            <div
              className="d-flex flex-column justify-content-around"
              style={{ height: "350px" }}
            >
              <h2>{singleProduct[0].productName}</h2>
              <div
                className="d-flex justify-content-between"
                style={{ width: "40%" }}
              >
                <span className="text-warning">
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                </span>
                <span style={{ fontSize: "1.2em" }}>
                  {singleProduct[0].avgRating} ratings
                </span>
              </div>
              <div
                className="d-flex justify-content-between"
                style={{ width: "40%" }}
              >
                <div className="fs-4 fw-semibold">
                  ${singleProduct[0].price}
                </div>
                <div
                  className="d-flex flex-column justify-content-center"
                  style={{ fontSize: "1.2em" }}
                >
                  category:{singleProduct[0].category}
                </div>
              </div>
              <div>{singleProduct[0].shortDesc}</div>
              <div
                className=" border border-dark rounded fs-5 px-3"
                style={{ width: "15%" }}
              >
                1
              </div>
              <div>
                <button
                  className="btn text-white px-3 fs-5"
                  style={{ backgroundColor: "#0F3460" }}
                  onClick={() => dispatch(add_to_cart(singleProduct[0]))}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description and reviews toggle section*/}
      <div className="container mb-5" style={{ height: "200px" }}>
        <div
          className="d-flex justify-content-around fw-semibold"
          style={{ width: "18%", fontSize: "1.05em" }}
        >
          <div ref={desc} onClick={descHandeler} style={{ cursor: "pointer" }}>
            Description
          </div>
          <div
            ref={revew}
            onClick={rewHandeler}
            style={{ cursor: "pointer", color: "#999999" }}
          >
            Reviews ({singleProduct[0].reviews.length})
          </div>
        </div>
        <div className="p-2" ref={changeData} style={{ fontSize: "1.15em" }}>
          {singleProduct[0].description}
        </div>
      </div>

      {/* Same Category items Section*/}
      <h2 className="container fs-3 ">You might also like</h2>
      <div
        className="mt-1 d-flex justify-content-center container"
        style={{ height: "auto", marginBottom: "60px" }}
      >
        <div className="row row-cols-3 g-3 w-75 justify-content-center">
          {similarData.map((ele) => (
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
          ))}
        </div>
      </div>

      {/*Footer Section*/}

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

export default Detail;
