import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

const energies = {
    "1": "Wind power",
    "2": "Biomass",
    "3": "Solar",
    "4": "Gas"
}

const OrdersNav = props => {
  const renderEnergyNavItem = () => {
    return Object.values(energies).map((energy, index) => {
      return (
        <NavItem>
          <NavLink href="#"> { energy } </NavLink>
        </NavItem>
      );
    });
  };

  return (
    <Nav vertical>
      { renderEnergyNavItem() }
    </Nav>
  );
};

export default OrdersNav;
