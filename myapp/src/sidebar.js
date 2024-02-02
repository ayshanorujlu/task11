import React from 'react'
import { Nav,NavItem,NavLink } from 'reactstrap'

export default function sidebar() {
  return (
    <div className="SideBar" style={{backgroundColor: "#5f71cc", color: "white", width: "340px"}}>
        <h3 className="head">Bootstrap SideBar</h3>

        <Nav vertical className="sideNav"> 
  <NavItem style={{height: "70px"}} className="sideNavHeading">
    <NavLink style={{color: "white"}} href="#">

    </NavLink>
  </NavItem>

  <NavItem className="sideNavItem" style={{display:"flex"}}>
    <img style= {{height:"30px"}} src="https://cdn-icons-png.flaticon.com/128/20/20176.png" alt="home"></img>
    <NavLink style={{color: "white"}} href="#">

    Home
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"  style={{display:"flex"}}>
  <img style= {{height:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/About_icon_%28The_Noun_Project%29.svg/2048px-About_icon_%28The_Noun_Project%29.svg.png" alt="about"></img>
    <NavLink style={{color: "white"}} href="#">
      About
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"  style={{display:"flex"}}> 
  <img style= {{height:"40px"}} src="https://static.thenounproject.com/png/59471-200.png" alt="pages"></img>
    <NavLink style={{color: "white"}} href="#">
      Pages
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"  style={{display:"flex"}}>
  <img style= {{height:"30px"}} src="https://icons.veryicon.com/png/o/business/business-finance/portfolio.png" alt="portfolio"></img>
    <NavLink style={{color: "white"}} href="#">
      Portfolio
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"  style={{display:"flex"}}> 
  <img style= {{height:"30px"}} src="https://static-00.iconduck.com/assets.00/faq-icon-1024x1024-z4ncur0t.png" alt="faq"></img>
    <NavLink style={{color: "white"}} href="#">
      FAQ
    </NavLink>
  </NavItem>
  <NavItem className="sideNavItem"  style={{display:"flex"}}>
  <img style= {{height:"30px"}} src="https://cdn-icons-png.freepik.com/256/455/455705.png" alt="contact"></img>
    <NavLink style={{color: "white"}} href="#">
      Contact
    </NavLink>
  </NavItem>
</Nav>
      </div>
  )
}
