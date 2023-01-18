import { NavLink } from 'react-router-dom';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  text-decoration: none;
  background-color: var(--first-color-dark);
  box-shadow: 0 0 10px var(--first-color-dark);
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 20px;
  width: 150px;
  height: 100%;
  z-index: 1000;
  @media screen and (min-width: 480px) {
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(BsJournalBookmarkFill)`
  fill: var(--some-white-color);
  margin-bottom: 5px;
  animation: book 5000ms ease-in-out infinite;

  @keyframes book {
    0% {
      rotate: 0;
    }
    25% {
      rotate: 360deg;
    }
    100% {
      rotate: 360deg;
    }
  }
`;

export const Logotext = styled.span`
  font-size: 15px;
  /* text-decoration: underline; */
  color: var(--some-white-color);
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

export const ItemStyle = styled.li`
  position: relative;
  padding-top: 2px;
  padding-right: 5px;
  list-style: none;
  margin: 20px;
  text-align: center;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--some-white-color);
  &:hover,
  :focus {
    color: var(--second-color);
  }
  &.active {
    color: var(--accent-color);
  }
`;
