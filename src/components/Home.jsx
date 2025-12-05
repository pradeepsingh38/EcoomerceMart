import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaShieldAlt } from "react-icons/fa";
import { FaCarRear, FaStar } from "react-icons/fa6";
import { IoCard, IoHeadset } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeroImg from "../Images/hero-img.png";
import PhoneImg from "../Images/phone-08.png";
import WatchImg from "../Images/watch-07.png";
import WirelessImg from "../Images/wireless-01.png";
import "../index.css";
import {
  SliderData,
  bestSale,
  discoutProducts,
  newArrival,
} from "../Product1";
import { add_to_cart } from "../redux/ActionCreator";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
};

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (ele) => {
    dispatch(add_to_cart(ele));

    toast.success("Successfully added!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      {/* HERO SLIDER */}
      <div style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container text-center" style={{ height: "500px" }}>
          <Slider {...settings}>
            {SliderData.map((slide, index) => (
              <div className="d-flex" key={index}>
                <div className="w-50 text-start ms-5 d-flex flex-wrap align-content-center" style={{ height: "500px" }}>
                  <h1 style={{ fontSize: "2.8em" }}>{slide.title}</h1>
                  <p style={{ fontSize: "1.1em" }}>{slide.desc}</p>
                  <div className="fw-semibold">Visit Collections</div>
                </div>
                <div className="w-50 d-flex justify-content-center flex-wrap align-content-center" style={{ height: "500px" }}>
                  <div className="h-50 w-100">
                    <img
                      className="h-100 w-100 object-fit-contain"
                      src={[HeroImg, PhoneImg, WirelessImg, WatchImg][index]}
                      alt="hero"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

     {/* SERVICE ICONS */}
<div className="container" style={{ height: "300px" }}>
  <div className="row row-cols-4 g-4 p-4 h-100">

    {[
      {
        icon: <FaCarRear />,
        bg: "#FDEFE6",
        title: "Free Shipping",
        desc: "Get free delivery on all orders."
      },
      {
        icon: <IoCard />,
        bg: "#CEEBE9",
        title: "Safe Payment",
        desc: "100% secure and trusted checkout."
      },
      {
        icon: <FaShieldAlt />,
        bg: "#E4F2B4",
        title: "Secure Payment",
        desc: "Your data is protected."
      },
      {
        icon: <IoHeadset />,
        bg: "#D6E5FC",
        title: "Back Guarantee",
        desc: "30-day money-back guarantee."
      },
    ].map((item, idx) => (
      <div className="col h-100 px-2 py-4" key={idx}>
        <div
          className="border h-100 text-center d-flex flex-column justify-content-evenly"
          style={{ backgroundColor: item.bg }}
        >
          <div>
            {React.cloneElement(item.icon, {
              className: "bg-white p-2 fs-1 rounded-circle",
            })}
          </div>

          <div className="fw-semibold fs-5">{item.title}</div>

          <div>{item.desc}</div>
        </div>
      </div>
    ))}

  </div>
</div>



      {/* PRODUCTS SECTIONS */}
      {[{ title: "Big Discount", products: discoutProducts }, { title: "New Arrival", products: newArrival }, { title: "Best Sales", products: bestSale }].map((section, idx) => (
        <div key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#F5F8FD" : "#fff", paddingBottom: "50px" }} className="mt-4">
          <div className="d-flex flex-wrap align-content-end justify-content-center fs-1 fw-semibold pt-4" style={{ height: "120px" }}>
            {section.title}
          </div>
          <div className="container d-flex justify-content-center mt-4">
            <div className="row row-cols-3 g-4 w-75 justify-content-center">
              {section.products.map((ele) => (
                <div className="col" style={{ height: "380px" }} key={ele.id}>
                  <div className="border h-100 rounded bg-white d-flex flex-column justify-content-evenly">
                    {ele.discount && (
                      <div className="border rounded-pill text-center ms-2 text-white py-1" style={{ width: "32%", backgroundColor: "#0B3362" }}>
                        {ele.discount}% Off
                      </div>
                    )}
                    <div className="text-center" style={{ height: "150px", width: "100%" }}>
                      <Link to={`/product/${ele.id}`}>
                        <img src={ele.imgUrl} className="w-75 h-100 object-fit-contain" alt="product" />
                      </Link>
                    </div>
                    <div className="w-75 fw-semibold ms-4 mt-2 d-flex flex-wrap align-content-center" style={{ fontSize: "1.1em", height: "50px" }}>
                      {ele.productName}
                    </div>
                    <div className="text-warning ms-4 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i % 2 === 0 ? "" : "mx-1"} />
                      ))}
                    </div>
                    <div className="d-flex justify-content-between ms-4 me-4" style={{ height: "35px" }}>
                      <div className="fs-4 fw-semibold">${ele.price}</div>
                      <button
                        className="addBtn rounded-circle border btn btn-primary fs-3 pt-1 h-100 d-flex flex-wrap justify-content-center align-content-center"
                        onClick={() => handleAddToCart(ele)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* FOOTER */}
<div
  className="py-5 mt-5"
  style={{ backgroundColor: "#0F3460" }}
>
  <div className="container">
    <div className="row row-cols-1 row-cols-md-4 g-4">

      {/* Brand Section */}
      <div>
        <h3 className="text-white fw-bold d-flex align-items-center gap-2 mb-3">
          <AiFillShopping size={28} />
          Mart
        </h3>
        <p
          className="fw-semibold"
          style={{ color: "#7395BA", lineHeight: "26px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum elementum diam.
        </p>
      </div>

      {/* About Us */}
      <div>
        <h4 className="text-white mb-3">About Us</h4>
        <ul
          className="fs-6 fw-semibold p-0"
          style={{ listStyle: "none", color: "#7395BA", lineHeight: "35px" }}
        >
          <li className="footer-link">Careers</li>
          <li className="footer-link">Our Stores</li>
          <li className="footer-link">Our Cares</li>
          <li className="footer-link">Terms & Conditions</li>
          <li className="footer-link">Privacy Policy</li>
        </ul>
      </div>

      {/* Customer Care */}
      <div>
        <h4 className="text-white mb-3">Customer Care</h4>
        <ul
          className="fs-6 fw-semibold p-0"
          style={{ listStyle: "none", color: "#7395BA", lineHeight: "35px" }}
        >
          <li className="footer-link">Help Center</li>
          <li className="footer-link">How to Buy</li>
          <li className="footer-link">Track Your Order</li>
          <li className="footer-link">Corporate Purchase</li>
          <li className="footer-link">Returns & Refunds</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-white mb-3">Contact Us</h4>
        <ul
          className="fw-semibold p-0"
          style={{ listStyle: "none", color: "#7395BA", lineHeight: "30px" }}
        >
          <li>
            📍 70 Washington Square South, NY 10012
          </li>
          <li>📧 pradeep08@gmail.com</li>
          <li>📞 +91 9538450441</li>
        </ul>
      </div>
    </div>

    {/* Bottom Footer */}
    <hr style={{ borderColor: "#7395BA" }} />

    <p className="text-center text-white-50 mt-3">
      © {new Date().getFullYear()} Mart — All Rights Reserved
    </p>
  </div>
</div>


      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Home;
