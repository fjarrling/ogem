import {NavLink} from "react-router-dom";
import logo from "@/assets/icons/logo.svg";

interface LogoProps {
  className?: string;  // Только класс для кастомизации
}

const Logo = ({className}: LogoProps) => {
  return (
    <NavLink to="/" className={className}>
      <img src={logo} alt="Logo"/>
    </NavLink>
  );
};

export default Logo;
