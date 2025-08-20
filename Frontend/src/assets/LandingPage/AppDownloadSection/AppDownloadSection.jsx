function AppDownloadSection(){
    return(
       <div style={{backgroundColor: "#FFEDBF"}}>
        <div className="row">
            <div className="col-6">
                <h1 style={{fontSize: "40px", fontWeight: "700", color: "#3A643C"}}>Get Started Today – Download the App Now!</h1>
                <p style={{fontSize: "20px", color: "#666666"}}>Simplify consultations, manage patients, and grow your practice—all in one place.</p>
                <div className="mt-5" style={{display: "flex", flexWrap: "wrap"}}>
                    <div className="mb-5" >
                        <img style={{width: "279.35", height: "58px"}} src="/images/BuildTrust.svg" alt="Build Trust and Community with Forum" />
                    </div>
                    <div>
                        <img style={{width: "279.35", height: "58px"}} src="/images/EarnMore.svg" alt="Earn More with Pay Per Conversation" />
                    </div>
                    <div>
                        <img style={{width: "279.35", height: "58px"}} src="/images/AttractPatients.svg" alt="Attract Patients with 5-Minute Free Call" />
                    </div>
                    <div className="mb-5">
                        <img style={{width: "279.35", height: "58px"}} src="/images/InstantAccess.svg" alt="Instant Access to Your Earnings with Wallet" />
                    </div>
                    <img style={{marginRight:"20px", width: "250.27px", height: "73.9px"}} src="/images/PlayStore.svg" alt="Google Play Store" />
                      <img style={{width: "250.27px", height: "73.9px"}} src="/images/AppStore.svg" alt="App Store" />
                </div>
            </div>
            <div className="col-6">
                <img style={{width: "600.57",height: "500.14px", marginLeft: "50px"}} src="/images/AppointmentsAppImage.svg" alt="" />
            </div>
        </div>
       </div>
    )
}

export default AppDownloadSection;

