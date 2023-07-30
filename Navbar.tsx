import React from 'react';
import NavItem from './NavItem';

interface NavbarProps {
  onNavItemClicked: (label: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavItemClicked }) => {
  const navItems = [
    { label: "Find talent", link: "/hiring" },
    { label: "For designers", link: "/for-designers" },
    { label: "Inspiration", link: "/shots/popular" },
    { label: "Learn design", link: "/learn" },
    { label: "Go Pro", link: "/pro" },
  ];

  const handleNavItemClicked = (label: string) => {
    onNavItemClicked(label);
  };

  return (
    <nav className="nav-v2-main" role="navigation" data-nav-v2-mobile>
      <div className="nav-v2-main__wrapper">
        <ul className="nav-v2-main__list">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              link={item.link}
              onClick={() => handleNavItemClicked(item.label)}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
