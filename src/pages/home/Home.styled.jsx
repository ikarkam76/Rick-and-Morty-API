import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoMob from 'images/PngItem_mobile.png'
import logoDesk from 'images/PngItem_desktop.png'
import filterIcon from 'images/filter.svg'

export const HomeContainer = styled.div`
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
`;
export const Logo = styled.div`
  width: 312px;
  height: 104px;
  margin-top: 92px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${logoMob});
  background-size: cover;

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 200px;
    margin-top: 86px;
    background-image: url(${logoDesk});
  }
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
`

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

  /* @media screen and (min-width: 1440px) {
    width: 240px;
  } */
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