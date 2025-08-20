import { useState } from "react";
import "./css/JoinCircle.css"

function JoinCircle() {
  const stepCardImages = [
    "/images/Step1Card.svg",// Replace with actual image paths
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
      decription:
        "Sign up on the Amrutam Doctors app or website to join our specialist network."
    },
    {
      title: "Step 3: Complete KYC",
      decription:
        "Fill in your details and upload the required documents for verification."
    },
    {
      title: "Step 4: Start consulting",
      decription:
        "Once verified, begin offering consultations and helping patients."
    }
  ];

  return (
    <div style={{ textAlign: "center", backgroundColor: "#FFF7E2", paddingTop: "5px"}}>
      <h1 style={{color: "#33643F", fontWeight: "700"}} className="mt-5">Join Our Circle of Care</h1>
      <p style={{color: "#4C4C4C",fontWeight: "500",fontSize: "20px"}}>Becoming a part of Amrutam is simple</p>

      <div className="row">
        <div className="col-6">
          {StepCards.map((StepCard, index) => (
            <div className="StepCards" style={{backgroundColor: activeStepCard === index ? "#33643F" : "#FFF7E2",
                color: activeStepCard === index ? "white" : "#33643F"}}
              key={index} onMouseEnter={() => setActiveStepCard(index)}>
              <h4>{StepCard.title}</h4>
              <p>{StepCard.decription}</p>
            </div>
          ))}
        </div>

        {/* Right Side Image */}
        <div className="col-6 mt-5">
          <img style={{width: "500.38px", height: "500px",marginLeft: "40px"}} src={stepCardImages[activeStepCard]} alt="Step Preview"/>
        </div>
        <div className="mt-5" style={{display: "flex", justifyContent: "center",flexWrap: "wrap"}}>
            <button style={{backgroundColor: "#33643F"}} className="btn btn-success ">Consultations</button>
            <button className="btn btn active" data-bs-toggle="button" aria-pressed="true">Payment withdrawal</button>
            <button className="btn btn active" data-bs-toggle="button" aria-pressed="true">Schedule</button>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="mb-4" style={{color: "#3A643C", fontSize: "24px", fontWeight: "700"}}>Value Your Practice</h5>
            <img src="/images/ValueYourPractice.png" style={{height: "435px", width: "216px", marginBottom: "25px"}} alt="Value Your Practice"/>
          </div>
          <div className="col-12 col-md-4">
            <img src="/images/Today'sHealingJourney.png" style={{height: "435px", width: "216px"}} alt="Value Your Practice"/>
            <h5 className="mt-4 mb-5" style={{color: "#3A643C", fontSize: "24px", fontWeight: "700"}}>Today's Healing Journey</h5>
          </div>
        <div className="col-12 col-md-4">
            <h5 className="mb-4" style={{color: "#3A643C", fontSize: "24px", fontWeight: "700"}}>Consultation Details</h5>
            <img src="/images/ConsultationDetails.png" style={{height: "435px", width: "216px"}} alt="Value Your Practice"/>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <button  className="btn btn-success" style={{backgroundColor: "#3A643C"}}>Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default JoinCircle;