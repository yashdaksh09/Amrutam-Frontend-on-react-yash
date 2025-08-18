import React from "react";
import LeftSideImage from "./LeftSideImage";
import RightSideImage from "./RightSideImage";
import ChooseDoctor from "./ChooseDoctor";

function ChooseDoctorSection(){
    return(
        <>
        <ChooseDoctor/>
        <LeftSideImage
        imageURL= "/images/FreeCalls.svg"
        productHeading= "Instant FREE 5-Mins Call"
        productDescription= "We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease."
        />
        <RightSideImage
        imageURL= "/images/MeaningfulForum.svg"
        productHeading= "Forum for Meaningful Connections"
        productDescription= "We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the Thoughts section allows you to share deeper Ayurvedic wisdom."
        />
        <LeftSideImage
         imageURL= "/images/SessionMode.svg"
        productHeading= "Choose Your Session Mode"
        productDescription= "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs."
        />
        
        <RightSideImage
         imageURL= "/images/SmartWallet.svg"
        productHeading= "Smart Wallet"
        productDescription= "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals."
        />
         <LeftSideImage
         imageURL= "/images/FlexibleWorkImage.png"
        productHeading= "Flexible Work Timing"
        productDescription= "We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice."
        />
        </>
    )
}

export default ChooseDoctorSection;