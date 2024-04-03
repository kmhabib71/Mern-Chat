import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import SearchInput from "./Search";
import NavMenu from "./NavMenu";
import Avatar from "./Avatar";
import ActionButton from "./ActionButton";
import AccountDropdown from "./AccountDropdown";

const Header = ({
  logoSrc,
  appName,
  navLinks,
  avatarSrc,
  actionText,
  showSearchInput,
  showAvatar,
  showActionButton,
  showAccountDropdown,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 flex items-center justify-between">
      <Logo logoSrc={logoSrc} appName={appName} />
      {isMobile ? (
        <FaBars onClick={handleMenuToggle} />
      ) : (
        <div className="flex items-center">
          {showSearchInput && <SearchInput />}
          <NavMenu navLinks={navLinks} />
          {showAvatar && <Avatar avatarSrc={avatarSrc} />}
          {showActionButton && <ActionButton actionText={actionText} />}
          {showAccountDropdown && <AccountDropdown />}
        </div>
      )}
      {isMenuOpen && isMobile && (
        <div className="absolute top-full left-0 w-full bg-white">
          <NavMenu navLinks={navLinks} />
        </div>
      )}
    </header>
  );
};

export default Header;
