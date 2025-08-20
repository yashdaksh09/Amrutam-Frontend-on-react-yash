function ConnectSection(){
    return(
        <div style={{backgroundColor: "#FFF7E2", paddingTop: "10px"}}>
             <h1 className="mt-5" style={{fontSize: "40px", fontWeight: "700", color: "#3A643C", textAlign: "center"}}>Let’s Connect</h1>
                <p style={{fontSize: "20px", color: "#666666", textAlign: "center"}}>We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.</p>
                <div className="row">
                    <div className="col-6">
                    <img style={{width: "498px", height: "471px" ,marginLeft: "20px", borderRadius: "15px"}} src="/images/ConnectSectionImage.jpg" alt="" />
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Your Name</label>
                        <input type="text" />Vikas Kumar
                    </form>
                </div>
                </div>
        </div>
    )
}

export default ConnectSection;