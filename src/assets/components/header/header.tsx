import { Group } from "@mantine/core";
import Logo from "../icons/logo.tsx";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Group className="header_inner" justify="space-between">
        <div className="header__logo">
          <Logo />
        </div>

        <Group className="header__right" justify="space-between">
          <div className="header__nav-item">bsc</div>
          <div className="header__nav-item">wallet</div>
        </Group>
      </Group>
    </div>
  );
};

export default Header;
