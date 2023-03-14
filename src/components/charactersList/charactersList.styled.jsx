import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import filterIcon from 'images/filter.svg';

export const UserMenuContainer = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: #203745;
`;

export const LogOutButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.15px;
  color: #203745;
  background-color: #50d9f1;
  border: 1px solid #203745;
  box-shadow: 0px 1px 5px rgba(191, 222, 66, 0.4),
    0px 2px 4px rgba(191, 222, 66, 0.2), 0px 4px 4px rgba(191, 222, 66, 0.3);
`;

export const FilterInput = styled.input`
  width: calc(100% - 52px);
  height: 56px;
  margin-top: 32px;
  padding-left: 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  background-image: url(${filterIcon});
  background-repeat: no-repeat;
  background-position: 16px;
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ItemCard = styled.div`
  width: 312px;
  height: 308px;
  margin: 32px auto 0;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 244px;
  }
`;

export const ItemImgContainer = styled.div`
  position: relative;
  height: 232px;
  width: 312px;

  @media screen and (min-width: 1440px) {
    width: 240px;
    height: 168px;
  }
`;

export const ItemImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

export const ItemLegend = styled.div`
  height: 76px;
`;

export const ItemName = styled.h2`
  height: 30px;
  margin: 12px 16px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemSpecie = styled.p`
  width: 280px;
  height: 21px;
  margin: 1px 16px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;