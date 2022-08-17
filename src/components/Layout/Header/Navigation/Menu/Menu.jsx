import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, MenuItemContacts } from './MenuItem/MenuItem';

const Menu = ({ menu, scrollFunc }) => {
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        {menu.map((item, index) => {
          return <MenuItem key={index} item={item} />;
        })}
        <MenuItemContacts scrollFunc={scrollFunc} />
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  menu: PropTypes.array,
  scrollFunc: PropTypes.func,
};

export default Menu;
