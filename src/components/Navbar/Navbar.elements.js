import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "../../globalStyle";
import { device } from "../../device";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: ${({ secondary }) => (secondary ? "60px" : "0")};
  height: ${({ secondary }) => (secondary ? "40px" : "60px")};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.darkSlategray : theme.white};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: ${({ secondary }) =>
    secondary ? "flex-end" : "space-between"};
  align-items: center;
  height: 65px;

  ${Container}
`;

export const NavLogo = styled.img`
  height: 56px;
  cursor: pointer;
  justify-self: flex-start;
`;

export const MobileIcon = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(-100%, 50%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  @media ${device.tablet} {
    position: absolute;
    width: 100%;
    height: 20vh;
    top: 100px;
    left: ${({ click }) => (click ? "0%" : "-100%")};
    background-image: linear-gradient(to top, #f0e6e6 0%, #f5eeee 100%);
    background: ${({ theme }) => theme.lightGray};
    flex-direction: column;

    &:nth-child(1) {
      top: 154px;
      background-image: linear-gradient(to top, #f0e6e6 0%, #f5eeee 100%);
      height: 63vh;
    }
  }
`;

export const NavItem = styled.li`
  position: relative;
  height: 100%;
  padding: 0 20px;
  background-color: ${({ active, theme }) =>
    active ? theme.red : "transparent"};
  margin: 0px 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.red};
  }

  @media ${device.tablet} {
    margin: 1rem 0;
    background-color: transparent;
    color: ${({ active, theme }) => (active ? theme.red : "transparent")};

    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;

export const DropdownMenu = styled.ul`
  visibility: ${({ isHovered }) => (isHovered ? "visible" : "hidden")};
  opacity: ${({ isHovered }) => (isHovered ? "1" : "0")};
  background-color: ${({ theme }) => theme.white};
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.black};
  transition: all 0.3s ease;
  position: absolute;
  top: 40px;
  left: 0;
`;

export const DropdownItem = styled.li`
  position: relative;
  height: 100%;

  width: 100%;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.red};
  margin: 0px 8px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  & button {
    cursor: pointer;
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    border: none;
    background-color: inherit;
    color: #fdfcfd;
    width: 100%;
    text-align: left;
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.red};

    & button {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  display: inline-block;
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  padding: 7px 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: ${({ activeclassname }) => (activeclassname ? "1" : "0.7")};
  outline: none;
  border: none;
  background-color: transparent;
  color: #fdfcfd;

  &:hover {
    opacity: 1;
  }
  @media ${device.tablet} {
    color: ${({ theme }) => theme.black};
    font-weight: 400;
  }
`;

export const NavItemBtn = styled.button`
  cursor: pointer;
  white-space: nowrap;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  padding: 7px 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: ${({ active }) => (active ? "1" : "0.7")};
  outline: none;
  border: none;
  background-color: transparent;
  color: #fdfcfd;

  &:hover {
    opacity: 1;
  }
`;

export const WidgetContainer = styled.li`
  position: relative;
  width: 48px;
  height: 48px;
  margin: 0px 8px;
  @media ${device.tablet} {
    margin: 0.25rem 6rem 0.25rem 0;
  }
`;

export const WidgetItemBtn = styled(NavItemBtn)`
  ${NavItemBtn}
  width: 8rem;
  height: 100%;
  display: flex;
  align-items: center;

  position: relative;
  color: ${({ theme }) => theme.gray};
  opacity: 1;
  & svg {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
  & span {
    position: absolute;
    top: 10%;
    right: 0;
    display: inline-block;
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
    font-size: 0.8rem;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    padding-top: 3px;
  }

  &:hover {
    opacity: 0.87;
  }
  & label {
    display: none;
  }
  @media ${device.tablet} {
    width: 9rem;
    font-weight: 400;

    & label {
      font-family: "Oswald", sans-serif;
      display: block;
      margin-left: 1.5rem;
    }
    & svg {
      width: 2rem;
      height: 100%;
    }
    & span {
      top: -10%;
      left: 2.5rem;
    }
  }
`;
