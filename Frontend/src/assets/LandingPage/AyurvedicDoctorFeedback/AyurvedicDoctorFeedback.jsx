import React from 'react';

function AyurvedicDoctorFeedback() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#FFF7E2", padding: "50px 20px" }}>
            <h1 style={{ color: "#33643F", fontWeight: "700" }}>What other Ayurvedic Doctors are Saying</h1>
            <p className="mb-5" style={{ fontSize: "20px", fontWeight: "400" }}>Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
                {/* Review Card 1 (Smaller) */}
                <div className="mb-4 mx-2" style={{ backgroundColor: "#FFEEC3", height: "auto", width: "100%", maxWidth: "347px", borderRadius: "10px", padding: "20px" }}>
                    <div className="d-flex align-items-center mb-2">
                        <img style={{ width: "44px", height: "44px", borderRadius: "50%", marginRight: "10px" }} src="/images/ReviewUserIcon.jpg" alt="User" />
                        <p className="mb-0 text-start" style={{ fontWeight: "400", fontSize: "14px" }}><b>Dr. Pooja Deshmukh,</b> BAMS</p>
                    </div>
                    <p className="mt-3 text-start" style={{ fontSize: "12px" }}>"Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."</p>
                </div>

                {/* Review Card 2 (Largest) */}
                <div className="mb-4 mx-2" style={{ backgroundColor: "#FFEEC3", height: "auto", width: "100%", maxWidth: "480px", borderRadius: "10px", padding: "20px" }}>
                    <div className="d-flex align-items-center mb-2">
                        <img style={{ width: "68px", height: "68px", borderRadius: "50%", marginRight: "10px" }} src="/images/ReviewUserIcon.jpg" alt="User" />
                        <p className="mb-0 text-start" style={{ fontWeight: "400", fontSize: "18px" }}><b>Dr. Rajesh Iyer,</b> Ayurvedic Practitioner</p>
                    </div>
                    <p className="mt-3 text-start" style={{ fontSize: "16px" }}>"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."</p>
                </div>

                {/* Review Card 3 (Smaller) */}
                <div className="mb-4 mx-2" style={{ backgroundColor: "#FFEEC3", height: "auto", width: "100%", maxWidth: "347px", borderRadius: "10px", padding: "20px" }}>
                    <div className="d-flex align-items-center mb-2">
                        <img style={{ width: "44px", height: "44px", borderRadius: "50%", marginRight: "10px" }} src="/images/ReviewUserIcon.jpg" alt="User" />
                        <p className="mb-0 text-start" style={{ fontWeight: "400", fontSize: "14px" }}><b>Dr. Ananya Sharma,</b> BAMS</p>
                    </div>
                    <p className="mt-3 text-start" style={{ fontSize: "12px" }}>"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."</p>
                </div>
            </div>
        </div>
    );
}

export default AyurvedicDoctorFeedback;