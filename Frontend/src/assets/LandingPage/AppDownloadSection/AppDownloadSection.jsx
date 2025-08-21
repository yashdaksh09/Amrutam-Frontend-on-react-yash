import React from 'react';
import "./css/AppDownloadSection.css";

function AppDownloadSection() {
    return (
        <div className="app-download-section">
            <div className="row app-section-row">
                {/* Left Section: Text and Icon Cards */}
                <div className="col-12 col-lg-6 px-4 text-center text-lg-start">
                    <h1 className="section-title">Get Started Today – Download the App Now!</h1>
                    <p className="section-description">Simplify consultations, manage patients, and grow your practice—all in one place.</p>
                    
                    <div className="app-buttons mt-5 d-flex flex-wrap justify-content-center justify-content-lg-start">
                        {/* Row 1 of Cards */}
                        <div className="d-flex flex-column flex-md-row justify-content-center mb-4">
                            <div className="card-wrapper mb-4 me-md-4">
                                <img className="responsive-image-icon" src="/images/BuildTrust.svg" alt="Build Trust and Community with Forum" />
                            </div>
                            <div className="card-wrapper mb-4 me-md-4">
                                <img className="responsive-image-icon" src="/images/EarnMore.svg" alt="Earn More with Pay Per Conversation" />
                            </div>
                        </div>

                        {/* Row 2 of Cards */}
                        <div className="d-flex flex-column flex-md-row justify-content-center mb-4">
                            <div className="card-wrapper mb-4 me-md-4">
                                <img className="responsive-image-icon" src="/images/AttractPatients.svg" alt="Attract Patients with 5-Minute Free Call" />
                            </div>
                            <div className="card-wrapper mb-4 me-md-4">
                                <img className="responsive-image-icon" src="/images/InstantAccess.svg" alt="Instant Access to Your Earnings with Wallet" />
                            </div>
                        </div>

                        {/* App Store Buttons */}
                        <div className="app-store-buttons d-flex justify-content-center justify-content-lg-start w-100 mt-3">
                            <img className="app-store-btn me-3 mb-2" src="/images/PlayStore.svg" alt="Google Play Store" />
                            <img className="app-store-btn mb-2" src="/images/AppStore.svg" alt="App Store" />
                        </div>
                    </div>
                </div>
                
                {/* Right Section: Phone Image */}
                <div className="col-12 col-lg-6 d-flex justify-content-center phone-image-col">
                    <img className="phone-image" src="/images/AppointmentsAppImage.svg" alt="Amrutam App" />
                </div>
            </div>
        </div>
    );
}

export default AppDownloadSection;