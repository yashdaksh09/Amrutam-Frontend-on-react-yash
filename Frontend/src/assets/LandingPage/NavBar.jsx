import React from 'react'

function NavBar() {
    return (
        <div style={{ backgroundColor: "#373636", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", minHeight: "67px" }}>
            <p style={{ fontSize: "20px", color: "#D9D9D9", margin: "10px 0", textAlign: "center", flexGrow: 1 }}>Register Yourself As An Amrutam Doctor</p>
            <button className="btn btn-success" style={{ backgroundColor: "#3A643C", borderRadius: "16px", width: "355px", height: "51px", flexShrink: 0, margin: "10px auto" }}>
                <i style={{ marginRight: "5px" }} className="fa-solid fa-user-doctor"></i>
                Join Now
            </button>
        </div>
    )
}

export default NavBar;