import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div style={{ backgroundColor: "#c8d9b5ff", padding: "40px 20px" }}> 
            <div className="row justify-content-center"> 
                {/* Column 1: Contact Info */}
                <div className="col-12 col-md-6 col-lg-4 text-center text-lg-start mb-5 mb-lg-0">
                    <div className="mb-4 d-flex justify-content-center justify-content-lg-start">
                        <img className="AMRUTAMLOGO" src="/images/AMRUTAM.png" alt="Amrutam Logo" />
                    </div>

                    <h3 className="mb-4" style={{ color: "#33643F", fontSize: "28px", fontWeight: "600" }}>Get in touch</h3>
                    <p style={{ fontSize: "20px" }}>support@amrutam.global</p>
                    <p style={{ fontSize: "20px" }}>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                    <p style={{ fontSize: "20px" }}>+91 9713171999</p>
                </div>

                {/* Column 2: Information Links */}
                <div className="col-12 col-md-6 col-lg-4 footer-links text-center text-lg-start mb-5 mb-lg-0">
                    <h3 style={{ color: "#33643F", marginBottom: "20px" }}>Information</h3>
                    <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Terms and Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Privacy Policy for Mobile App</a></li>
                        <li><a href="">Shipping and Return Policy</a></li>
                        <li><a href="">International Delivery</a></li>
                        <li><a href="">For Business, Hotels and Resorts</a></li>
                    </ul>
                </div>

                {/* Column 3: Follow Us */}
                <div className="col-12 col-md-6 col-lg-4 text-center text-lg-start">
                    <h3 className="mb-4" style={{ color: "#33643F" }}>Follow Us</h3>
                    <div className="social-media d-flex justify-content-center justify-content-lg-start flex-wrap"> 
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-facebook-f icon"></i></a>
                        </div>
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-instagram icon"></i></a>
                        </div>
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-youtube icon"></i></a>
                        </div>
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-twitter icon"></i></a>
                        </div>
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-linkedin-in icon"></i></a>
                        </div>
                        <div className="social-media-icons">
                            <a className="social-links" href=""><i className="fa-brands fa-pinterest-p icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;