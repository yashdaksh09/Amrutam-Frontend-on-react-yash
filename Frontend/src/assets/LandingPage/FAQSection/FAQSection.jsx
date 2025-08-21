import React from 'react';
import "./css/FAQSection.css";

function FAQSection() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "#FFF7E2", paddingTop: "5px", padding: "50px 20px" }}>
            <h1 style={{ fontSize: "40px", color: "#33643F", fontWeight: "700" }} className="mt-5">Frequently Asked Questions</h1>
            <p style={{ color: "#4C4C4C", fontSize: "20px" }}>Find quick answers to common questions to help you navigate the app and its features easily.</p>

            <div className="accordion mx-auto" id="faqAccordion" style={{ maxWidth: "1000px" }}>
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
                            {/* Content here */}
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
                            {/* Content here */}
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
                            {/* Content here */}
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
                            {/* Content here */}
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
                            {/* Content here */}
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
                            {/* Content here */}
                        </div>
                    </div>
                </div>

                <div className="mt-5 mb-5" style={{ display: "flex", justifyContent: "center" }}>
                    <button className="btn btn-success" style={{ backgroundColor: "#3A643C" }}>Join Now</button>
                </div>
            </div>
        </div>
    );
}

export default FAQSection;