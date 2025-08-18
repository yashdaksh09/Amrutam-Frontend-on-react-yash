import React from "react";
function RightSideImage({imageURL, productHeading, productDescription}){
    return(
        <div className="row p-6" style={{backgroundColor: "#FFF7E2"}}>
                <div className="col-6 mt-5" style={{textAlign: "start"}}>
                    <h2 style={{color: "#3A643C", fontWeight: "700", fontSize: "28px"}}>{productHeading}</h2>
                    <p>{productDescription}</p>
                </div>
                  <div className="col-6">
                    <img style={{height: "362.79px", width: "515px"}} src={imageURL} alt="" />
                </div>
            </div>
    )
}

export default RightSideImage;