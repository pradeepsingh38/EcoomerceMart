// src/components/Footer.js
import React from "react";
import { AiFillShopping } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-5" style={{ backgroundColor: "#0F3460" }}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div>
            <h3 className="text-white fw-bold d-flex align-items-center gap-2 mb-3">
              <AiFillShopping size={28} />
              Mart
            </h3>
            <p className="fw-semibold" style={{ color: "#7395BA", lineHeight: "26px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum elementum diam.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-3">About Us</h4>
            <ul className="fs-6 fw-semibold p-0" style={{ listStyle: "none", color: "#7395BA", lineHeight: "35px" }}>
              <li className="footer-link">Careers</li>
              <li className="footer-link">Our Stores</li>
              <li className="footer-link">Our Cares</li>
              <li className="footer-link">Terms & Conditions</li>
              <li className="footer-link">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3">Customer Care</h4>
            <ul className="fs-6 fw-semibold p-0" style={{ listStyle: "none", color: "#7395BA", lineHeight: "35px" }}>
              <li className="footer-link">Help Center</li>
              <li className="footer-link">How to Buy</li>
              <li className="footer-link">Track Your Order</li>
              <li className="footer-link">Corporate Purchase</li>
              <li className="footer-link">Returns & Refunds</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3">Contact Us</h4>
            <ul className="fw-semibold p-0" style={{ listStyle: "none", color: "#7395BA", lineHeight: "30px" }}>
              <li>📍 70 Washington Square South, NY 10012</li>
              <li>📧 pradeep08@gmail.com</li>
              <li>📞 +91 9538450441</li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "#7395BA" }} />
        <p className="text-center text-white-50 mt-3">© {new Date().getFullYear()} Mart — All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
