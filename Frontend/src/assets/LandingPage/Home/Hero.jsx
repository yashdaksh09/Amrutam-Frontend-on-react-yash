function Hero(){
    return(
     <div style={{backgroundColor: "#f7edd3ff"}}>
        <div className="row">
            <div className="col-6">
                <h6 className="mt-5 text-muted">Namaste, Welcome to Amrutam</h6>

                <h1 style={{fontWeight: "800", fontSize: "40px", color:"#0C0C0C"}}>Join Amrutam-</h1><h1 style={{color:"#3A643C",fontSize: "40px",fontWeight: "800"}}>Grow Your Practice</h1>

                <p style={{fontSize: "20px",fontWeight: "500"}} className="mb-5">Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.</p>

                <button className="btn btn-success heroJoinButton">Join Now</button>

                <div className="mt-5" style={{display: "flex", textAlign: "center"}}>
                    <div style={{height: "100px", width: "100px", marginRight: "30px"}}>
                        <h2>500+</h2>
                        <p>Average Active Users</p>
                    </div>
                    <div style={{width: "2px", backgroundColor: "#999", height:"80px", margin: "10px 40px 0px 20px"}} ></div>
                    <div style={{height: "100px", width: "100px"}}>
                        <h2>40+</h2>
                        <p>Average daily free calls</p>
                    </div>
                </div>

            </div>
            <div className="col-6">
                <img style={{width: "569px", height: "440px"}} src="/images/GroupOfDoctors.png" alt="" />
            </div>
        </div>
     </div>
    )
}

export default Hero;