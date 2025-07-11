import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid border p-2">
        <div className="d-flex justify-content-around flex-wrap align-content-center">
          <div>
            <div className=" d-flex">
              <span className="d-flex flex-column justify-content-center fs-3">
                {<AiFillShopping />}
              </span>
              <div className="d-flex flex-wrap align-content-center">
                <span className="fw-bold fs-3">Mart</span>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <Link
                className="nav-link active fw-semibold px-2 py-1 fs-5"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>

              <Link
                className="nav-link active fw-semibold px-2 py-1 fs-5 mx-4"
                to="/shop"
              >
                Shop
              </Link>
              <Link
                className="nav-link active fw-semibold px-2 py-1 fs-5"
                to="/cart"
              >
                Cart
              </Link>
            </div>
          </div>
          <div>
            <div className="p-1">
              <button className="me-3 btn btn-dark px-2 py-1">
                {<RiContactsFill />}
              </button>
              <Link to="/cart" className="btn btn-dark  px-2 py-1">
                {<BsFillCartCheckFill />}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
