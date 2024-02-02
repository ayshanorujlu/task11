import React from 'react'
import { Nav,NavItem,NavLink } from 'reactstrap'

export default function navbar() {
  return (
    <div>
     <Nav
  justified
  pills
>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Much Longer Nav Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
    </div>
  )
}
