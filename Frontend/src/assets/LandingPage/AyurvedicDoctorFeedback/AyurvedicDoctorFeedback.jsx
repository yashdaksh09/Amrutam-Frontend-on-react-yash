function AyurvedicDoctorFeedback(){
    return(
        <div style={{textAlign: "center", backgroundColor: "#FFF7E2"}}>
            <h1 style={{color: "#33643F",fontWeight: "700"}}>What other Ayurvdic Doctors are Saying</h1>
            <p className="mb-5" style={{fontSize: "20px", fontWeight: "400"}}>Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>
           <div style={{display: "flex", justifyContent: "center"}}>
             <div className="mt-5" style={{backgroundColor: "#FFEEC3", height: "190px", width: "347px", marginRight: "20px"}}>
                <div style={{display: "flex"}}>
                  <img className="mt-4" style={{width: "44px", height: "44px", borderRadius: "50px", marginLeft: "20px"}} src="/images/ReviewUserIcon.jpg" alt="" />
                  <p className="mt-4" style={{marginLeft: "10px", fontWeight: "400", fontSize: "14px"}}><b>Dr.Pooja Deshmukh,</b> BAMS </p>
                  </div>
                  <p className="mt-3" style={{fontSize: "12px", textAlign: "start", marginLeft: "20px"}}>"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                </div>



            <div className="mb-5" style={{backgroundColor: "#FFEEC3", height: "283px", width: "480px", marginRight: "20px"}}>
                <div style={{display: "flex"}}>
                  <img className="mt-4" style={{width: "68px", height: "68px", borderRadius: "50px", marginLeft: "20px"}} src="/images/ReviewUserIcon.jpg" alt="" />
                  <p className="mt-4" style={{marginLeft: "10px", fontWeight: "400", fontSize: "18px"}}> <b>Dr. Rajesh Iyer,</b> Ayurvedic Practition</p>
                  </div>
                  <p className="mt-3" style={{fontSize: "16px", textAlign: "start", marginLeft: "20px"}}>"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."</p>
                </div>

                
           <div className="mt-5" style={{backgroundColor: "#FFEEC3", height: "190px", width: "347px"}}>
            <div style={{display: "flex"}}>
                  <img className="mt-4" style={{width: "44px", height: "44px", borderRadius: "50px", marginLeft: "20px"}} src="/images/ReviewUserIcon.jpg" alt="" />
                  <p className="mt-4" style={{marginLeft: "20px", fontWeight: "400",fontSize: "14px"}}> <b>Dr. Ananya Sharma,</b>  BAMS</p>
                  </div>
                  <p className="mt-3" style={{fontSize: "12px", textAlign: "start", marginLeft: "20px"}}>"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."</p>
           </div>
           </div>
        </div>
    )
}

export default AyurvedicDoctorFeedback;