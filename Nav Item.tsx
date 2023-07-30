import React from 'react';

interface NavItemProps {
  label: string;
  link: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, link, onClick }) => {
  return (
    <li className="nav-v2-main__item">
      <a data-nav-event-clicked={label} href={link} onClick={onClick}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
