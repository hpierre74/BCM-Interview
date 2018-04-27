import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

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
        <NavItem key={index}>
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

OrdersNav.propTypes = {
    energies: PropTypes.object
}

export default OrdersNav;
