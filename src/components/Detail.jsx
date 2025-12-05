import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../Product1";
import tableImg from "../Images/table.jpg";
import { FaStar } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/ActionCreator";
import Footer from "../components/Footer"

const Detail = () => {
  const dispatch = useDispatch();
  const [successMsg, setSuccessMsg] = useState("");
  const [quantity, setQuantity] = useState(0); // Track quantity

  let { id } = useParams();
  let singleProduct = products.find((ele) => ele.id == id);

  let cate = singleProduct.category;
  let similarData = products.filter((ele) => ele.category == cate && ele.id != id);

  let changeData = useRef(null);
  let desc = useRef(null);
  let revew = useRef(null);

  // Add product to cart
  const addProductToCart = (item) => {
    setQuantity((prev) => prev + 1); // Increment quantity
    dispatch(add_to_cart({ ...item, quantity: quantity + 1 })); // Update Redux

    setSuccessMsg("Successfully Added to Cart!");
    setTimeout(() => setSuccessMsg(""), 2000);
  };

  const descHandeler = (e) => {
    e.target.style.color = "black";
    changeData.current.textContent = singleProduct.description;
    revew.current.style.color = "#999999";
  };

  const rewHandeler = (e) => {
    e.target.style.color = "black";
    changeData.current.textContent = "";
    singleProduct.reviews.forEach((ele) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <div>John Doe</div>
        <div class="text-warning">${ele.rating} (rating)</div>
        <div>${ele.text}</div>
      `;
      changeData.current.appendChild(div);
    });
    desc.current.style.color = "#999999";
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
      {/* SUCCESS POPUP */}
      {successMsg && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            fontSize: "1.1em",
            zIndex: 9999,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          }}
        >
          {successMsg}
        </div>
      )}

      {/* Banner */}
      <div style={styleing.style}>
        <div
          style={styleing.style1}
          className="d-flex flex-wrap justify-content-center align-content-center"
        >
          {singleProduct.productName}
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mt-1 mb-5" style={{ height: "450px" }}>
        <div className="row row-cols-2 h-100">
          <div className="col h-100 d-flex flex-column justify-content-center">
            <div style={{ height: "320px" }}>
              <img
                src={singleProduct.imgUrl}
                className="object-fit-contain"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

          <div className="col h-100 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-around" style={{ height: "350px" }}>
              <h2>{singleProduct.productName}</h2>

              <div className="d-flex justify-content-between" style={{ width: "40%" }}>
                <span className="text-warning">
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                </span>
                <span style={{ fontSize: "1.2em" }}>{singleProduct.avgRating} ratings</span>
              </div>

              <div className="d-flex justify-content-between" style={{ width: "40%" }}>
                <div className="fs-4 fw-semibold">${singleProduct.price * (quantity || 1)}</div>
                <div className="d-flex flex-column justify-content-center" style={{ fontSize: "1.2em" }}>
                  category: {singleProduct.category}
                </div>
              </div>

              <div>{singleProduct.shortDesc}</div>

              {/* Quantity Display */}
              <div className="border border-dark rounded fs-5 px-3" style={{ width: "15%" }}>
                {quantity || 1}
              </div>

              <div>
                <button
                  className="btn text-white px-3 fs-5 mt-2"
                  style={{ backgroundColor: "#0F3460" }}
                  onClick={() => addProductToCart(singleProduct)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="container mb-5" style={{ height: "200px" }}>
        <div className="d-flex justify-content-around fw-semibold" style={{ width: "18%", fontSize: "1.05em" }}>
          <div ref={desc} onClick={descHandeler} style={{ cursor: "pointer" }}>
            Description
          </div>
          <div ref={revew} onClick={rewHandeler} style={{ cursor: "pointer", color: "#999999" }}>
            Reviews ({singleProduct.reviews.length})
          </div>
        </div>

        <div className="p-2" ref={changeData} style={{ fontSize: "1.15em" }}>
          {singleProduct.description}
        </div>
      </div>

      {/* Similar Products */}
      <h2 className="container fs-3">You might also like</h2>
      <div className="mt-1 d-flex justify-content-center container" style={{ height: "auto", marginBottom: "60px" }}>
        <div className="row row-cols-3 g-3 w-75 justify-content-center">
          {similarData.map((ele) => (
            <div className="col" style={{ height: "380px" }} key={ele.id}>
              <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                <div className="text-center" style={{ height: "150px", width: "100%" }}>
                  <Link to={`/product/${ele.id}`}>
                    <img src={ele.imgUrl} className="w-75 h-100 object-fit-contain" />
                  </Link>
                </div>

                <div className="w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center" style={{ fontSize: "1.1em", height: "50px" }}>
                  {ele.productName}
                </div>

                <div className="text-warning ms-4 mb-3">
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                  <FaStar className="mx-1" />
                  <FaStar />
                </div>

                <div className="d-flex justify-content-between ms-4 me-4" style={{ height: "35px" }}>
                  <div className="fs-4 fw-semibold">${ele.price}</div>
                  <button
                    className="addBtn rounded-circle border btn fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                    onClick={() => addProductToCart(ele)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
            <Footer />

    </>
  );
};

export default Detail;
