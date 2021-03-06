import styled from "styled-components";
import { device } from "../../device";

export const SelectItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
`;

export const ItemBody = styled.div`
  position: relative;
  width: 100%;
  height: 73%;
  overflow: hidden;
`;

export const LikeButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-35%, 35%);
  background-color: ${({ theme }) => theme.grayWhite};
  color: ${({ theme }) => theme.gray};
  border: none;
  outline: none;
  height: 36px;
  width: 36px;
  font-size: 17px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  visibility: hidden;
  border-radius: 50%;
  z-index: 99;
`;

export const BadgeCard = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transform: translate(25%, 75%);
  background-color: #e30014;
  padding: 4px 12px;
  z-index: 99;
  color: #fdfcfd;
  font-size: 12px;
  border-radius: 2px;
`;

export const ItemFooter = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 8px 12px;
  border-top: 1px solid #d7d1d4;
`;

export const CardDetail = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 8px;
`;

export const Tittle = styled.p`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
  display: -webkit-box;
  line-height: 18px;
  max-height: 40px;
  color: #3a3a3a;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceDetail = styled.p`
  display: inline-block;
  font-family: "Oswald", sans-serif;
  line-height: 1.6rem;
  font-size: 1.5rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.red};
  width: 40%;
  font-weight: 800;
  padding-top: 12px;
  text-align: end;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  &:hover ${LikeButton} {
    visibility: visible;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media ${device.mobileM} {
    height: 17.5rem;
  }
`;
