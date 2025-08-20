import React from 'react';
import "./css/FAQSection.css"; 

function FAQSection() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#FFF7E2", paddingTop: "5px", paddingLeft: "150px", paddingRight: "150px"}}>
            <h1 style={{fontSize: "40px", color: "#33643F", fontWeight: "700"}} className="mt-5">Frequently Asked Questions</h1>
            <p style={{color: "#4C4C4C", fontSize: "20px"}}>Find quick answers to common questions to help you navigate the app and its features easily.</p>

            <div className="accordion" id="faqAccordion">
                {/* FAQ Item 1 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            What is Amrutam?
                            <i className="fa-solid fa-plus plus-icon"></i> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        
                            {/* <ul>
                                <li>Amrutam is a platform dedicated to providing quality healthcare solutions.</li>
                                <li>It connects patients with experienced practitioners and offers a range of services.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How does Amrutam help me grow as a practitioner?
                            <i className="fa-solid fa-plus plus-icon"></i>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           
                            {/* <ul>
                                <li>Amrutam offers tools for patient management, appointment scheduling, and secure communication.</li>
                                <li>It provides a platform to expand your reach and build your professional network.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I become a part of Amrutam Doctor?
                            <i className="fa-solid fa-plus plus-icon"></i>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                           
                            {/* <ul>
                                <li>You can sign up on our platform and complete the registration process.</li>
                                <li>Our team will verify your credentials, and then you'll be ready to join.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is Amrutam Global as a platform?
                            <i className="fa-solid fa-plus plus-icon"></i>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            
                            {/* <ul>
                                <li>Amrutam Global extends our services worldwide, connecting practitioners and patients internationally.</li>
                                <li>It offers cross-border consultations and health management.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What documents do I need to provide?
                            <i className="fa-solid fa-plus plus-icon"></i>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            
                            {/* <ul>
                                <li>You will need to provide your medical license, identity proof, and educational certificates.</li>
                                <li>More details will be provided during the registration process.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>

                {/* FAQ Item 6 */}
                <div className="accordion-item mb-4">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Is there a fee to join Amrutam?
                            <i className="fa-solid fa-plus plus-icon"></i>
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                        
                            {/* <ul>
                                <li>Joining Amrutam as a practitioner may involve a subscription fee for premium features.</li>
                                <li>Basic access is free. Please refer to our pricing page for more details.</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
                 <div className=' mt-5 ' style={{display: "flex", justifyContent: "center"}}>
          <button  className="btn btn-success mb-5" style={{backgroundColor: "#3A643C"}}>Join Now</button>
        </div>
            </div>
        </div>
    );
}

export default FAQSection;