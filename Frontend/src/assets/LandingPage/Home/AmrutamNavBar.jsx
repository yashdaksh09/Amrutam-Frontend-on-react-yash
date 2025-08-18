function AmrutamNavBar(){
    return(
        <div className="" style={{backgroundColor: "#FFF7E2", paddingBottom: "5px"}}>
          <div style={{display: "flex", justifyContent: "center"}}>
              <img style={{height: "34px", width: "267px"}} src="/images/AMRUTAM.png" alt="" />
          </div>
        
        <div className="NavList mt-3">
            <ul>
                <li>
                    <a href="">About us</a>
                </li>
                <li>
                    <a href="">Onboarding</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
                 <li>
                    <a href="">Testimonials</a>
                </li>
            </ul>
        </div>
      </div>
    )
}

export default AmrutamNavBar;