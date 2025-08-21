import React from "react";

function RightSideImage({ imageURL, productHeading, productDescription }) {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#FFF7E2" }}>
            <div className="row d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center py-5">
                <div className="col-12 col-lg-6 mt-4 mt-lg-0 text-center text-lg-start px-4 order-2 order-lg-1">
                    <h2 style={{ color: "#3A643C", fontWeight: "700", fontSize: "28px" }}>{productHeading}</h2>
                    <p>{productDescription}</p>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center p-0 order-1 order-lg-2">
                    <img
                        style={{ height: "auto", width: "100%", maxWidth: "515px", padding: "0 15px" }}
                        src={imageURL}
                        alt="Product visual"
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSideImage;