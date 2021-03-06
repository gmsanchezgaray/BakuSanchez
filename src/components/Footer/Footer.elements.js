import styled from "styled-components";
import { device } from "../../device";

export const WrapperFooter = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.lightGray};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 0px;

  @media ${device.tablet} {
    grid-column-gap: 1.5rem;
  }
  @media ${device.mobileM} {
    grid-column-gap: 0.5rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2rem;
  }
`;

export const FooterItem = styled.div`
  & svg {
    height: 100px;
  }

  &:nth-child(1) {
    margin: 20px 0;
    text-align: center;
  }

  &:nth-child(5) {
    background-color: ${({ theme }) => theme.mediumBlack};
    color: ${({ theme }) => theme.white};
    padding: 10px 0;
    font-size: 0.8rem;
    grid-column: 1/5;
    text-align: center;
  }

  @media ${device.tablet} {
    & svg {
      width: 4.5rem;
    }
    font-size: 0.9rem;
  }

  @media ${device.mobileM} {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(4) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(5) {
      grid-column: 1/5;
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80%;
  height: 2rem;
  margin: 0 auto;

  & svg {
    color: ${({ theme }) => theme.crimson};

    margin: 0 8px;
    height: 100%;
    width: 20px;
  }
  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const ButtonSubscribe = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.crimson} !important;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.white} !important;
  font-size: 0.95rem;
  outline: none;
  padding: 6px 14px 6px 4px;
  white-space: nowrap;
  border-radius: 8px;
  border: none;
  width: 80%;
  z-index: 100;

  & svg {
    background-color: transparent;
    height: 26px;
    width: 26px;
    border-radius: 4px;
    padding: 4px;
  }

  &:hover {
    transition: 0.3s all;
    background-color: ${({ theme }) => theme.lightPink} !important;
    color: ${({ theme }) => theme.crimson} !important;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;

  & h4 {
    color: ${({ theme }) => theme.darkSlategray};
    margin-bottom: 6px;
    font-weight: 500;
  }

  & button {
    text-decoration: none;
    margin: 4px 0;
    font-weight: 500;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.red};
    background-color: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  @media ${device.tablet} {
    & button {
      font-size: 0.8rem;
    }
  }
`;

export const InputSubscribe = styled.input`
  height: 2.5rem;
  margin: 0 16px 16px 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.outlineGray};
  padding-left: 10px;
  width: 100%;
  font-size: 1rem;

  @media ${device.tablet} {
    margin-bottom: 4px;
  }
`;
