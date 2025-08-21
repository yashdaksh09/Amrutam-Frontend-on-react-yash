import React from 'react';
import "./css/ConnectSection.css";

function ConnectSection() {
    return (
        <div style={{ backgroundColor: "#FFF7E2", paddingTop: "10px" }}>
            <h1 className="mt-5" style={{ fontSize: "40px", fontWeight: "700", color: "#3A643C", textAlign: "center" }}>Let’s Connect</h1>
            <p style={{ fontSize: "20px", color: "#666666", textAlign: "center" }}>We’re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.</p>
            <div className="row d-flex flex-wrap flex-lg-nowrap justify-content-center align-items-center py-5">
                <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                    <img style={{ width: "100%",  height:" 400px", maxWidth: "498px", borderRadius: "25px", padding: "0 15px" }} src="/images/ConnectSectionImage.jpg" alt="" />
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <div className="form-container">
                        <div className="form-content">
                            <form>
                                <div className="input-group d-flex flex-column flex-md-row">
                                    <div className="form-field">
                                        <label>Your Name</label>
                                        <input type="text" placeholder="Vikas Kumar" />
                                    </div>
                                    <div className="form-field">
                                        <label>Your Contact Number</label>
                                        <input type="text" placeholder="8743414476" />
                                    </div>
                                </div>
                                <div className="form-field full-width">
                                    <label>Your Email</label>
                                    <input type="text" placeholder="vikass@gmail.com" />
                                </div>
                                <div className="form-field full-width">
                                    <label>Message (Optional)</label>
                                    <input type="text" placeholder="I want to On-board as a Doctor" />
                                </div>
                                <div className="form-button-container">
                                    <button type="submit" className="send-message-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectSection;