import React from 'react';

function Hero() {
    return (
        <div style={{ backgroundColor: "#f7edd3ff" }}>
            <div className="container-fluid">
                <div className="row d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center py-5">
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 px-4 text-center text-lg-start">
                        <h6 className="mt-5 text-muted">Namaste, Welcome to Amrutam</h6>

                        <h1 style={{ fontWeight: "800", fontSize: "40px", color: "#0C0C0C" }}>Join Amrutam-</h1>
                        <h1 style={{ color: "#3A643C", fontSize: "40px", fontWeight: "800" }}>Grow Your Practice</h1>

                        <p style={{ fontSize: "20px", fontWeight: "500" }} className="mb-5">Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.</p>

                        <button className="btn btn-success heroJoinButton">Join Now</button>

                        <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-lg-start text-center">
                            <div style={{ height: "100px", width: "100px", marginRight: "30px" }}>
                                <h2>500+</h2>
                                <p>Average Active Users</p>
                            </div>
                            <div className="d-none d-md-block" style={{ width: "2px", backgroundColor: "#999", height: "80px", margin: "10px 40px 0px 20px" }} ></div>
                            <div style={{ height: "100px", width: "100px" }}>
                                <h2>40+</h2>
                                <p>Average daily free calls</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                        <img style={{ width: "100%", height: "auto", maxWidth: "569px" }} src="/images/GroupOfDoctors.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;