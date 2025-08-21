import React from 'react'

function AmrutamNavBar() {
    return (
        <div style={{ backgroundColor: "#FFF7E2", paddingBottom: "5px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="mt-4" style={{ height: "34px", width: "100%", maxWidth: "267px" }} src="/images/AMRUTAM.png" alt="Amrutam Logo" />
            </div>

            <div className="NavList mt-3">
                <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: "0", margin: "0", flexWrap: "wrap" }}>
                    <li style={{ margin: "0 10px" }}>
                        <a href="" style={{ whiteSpace: "nowrap" }}>About us</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="" style={{ whiteSpace: "nowrap" }}>Onboarding</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="" style={{ whiteSpace: "nowrap" }}>FAQ</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="" style={{ whiteSpace: "nowrap" }}>Testimonials</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AmrutamNavBar;