import { useState } from "react";
import "./css/JoinCircle.css";

function JoinCircle() {
    const stepCardImages = [
        "/images/Step1Card.svg",
        "/images/Step2CardImage.png",
        "/images/Step3CardImage.png",
        "/images/Step4CardImage.png",
    ];

    const [activeStepCard, setActiveStepCard] = useState(0);

    const StepCards = [
        {
            title: "Step 1: Get your referral code",
            decription: "Contact us to receive your unique referral code."
        },
        {
            title: "Step 2: Register on Amrutam",
            decription: "Sign up on the Amrutam Doctors app or website to join our specialist network."
        },
        {
            title: "Step 3: Complete KYC",
            decription: "Fill in your details and upload the required documents for verification."
        },
        {
            title: "Step 4: Start consulting",
            decription: "Once verified, begin offering consultations and helping patients."
        }
    ];

    return (
        <div style={{ textAlign: "center", backgroundColor: "#FFF7E2", padding: "50px 20px" }}>
            <h1 style={{ color: "#33643F", fontWeight: "700" }} className="mt-5">Join Our Circle of Care</h1>
            <p style={{ color: "#4C4C4C", fontWeight: "500", fontSize: "20px" }}>Becoming a part of Amrutam is simple</p>

            <div className="container-fluid py-5">
                <div className="row d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center">
                    {/* Left side: Step Cards */}
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column align-items-center">
                        {StepCards.map((StepCard, index) => (
                            <div
                                className="StepCards"
                                style={{
                                    backgroundColor: activeStepCard === index ? "#33643F" : "#FFF7E2",
                                    color: activeStepCard === index ? "white" : "#33643F",
                                }}
                                key={index}
                                onMouseEnter={() => setActiveStepCard(index)}
                            >
                                <h4>{StepCard.title}</h4>
                                <p>{StepCard.decription}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Step Image */}
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex justify-content-center p-0">
                        <img style={{ width: "100%", height: "auto", maxWidth: "500px" }} src={stepCardImages[activeStepCard]} alt="Step Preview" />
                    </div>
                </div>
            </div>
            
            <div className="container-fluid px-4">
                <div className="row d-flex justify-content-center mb-5">
                    <div className="mt-5 d-flex justify-content-center flex-wrap" style={{marginBottom: "50px"}}>
                        <button style={{ backgroundColor: "#33643F" }} className="btn btn-success mb-3 me-3">Consultations</button>
                        <button className="btn btn- active mb-3 me-3">Payment withdrawal</button>
                        <button className="btn btn- active mb-3 me-3">Schedule</button>
                    </div>
                    <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
                        <h5 className="mb-4" style={{ color: "#3A643C", fontSize: "24px", fontWeight: "700" }}>Value Your Practice</h5>
                        <img src="/images/ValueYourPractice.png" style={{ height: "auto", width: "100%", maxWidth: "216px" }} alt="Value Your Practice" />
                    </div>
                    <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
                        <img src="/images/Today'sHealingJourney.png" style={{ height: "auto", width: "100%", maxWidth: "216px" }} alt="Today's Healing Journey" />
                        <h5 className="mt-4" style={{ color: "#3A643C", fontSize: "24px", fontWeight: "700" }}>Today's Healing Journey</h5>
                    </div>
                    <div className="col-12 col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center">
                        <h5 className="mb-4" style={{ color: "#3A643C", fontSize: "24px", fontWeight: "700" }}>Consultation Details</h5>
                        <img src="/images/ConsultationDetails.png" style={{ height: "auto", width: "100%", maxWidth: "216px" }} alt="Consultation Details" />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn btn-success" style={{ backgroundColor: "#3A643C", marginBottom: "50px", width: "200px" }}>Join Now</button>
            </div>
        </div>
    );
}

export default JoinCircle;