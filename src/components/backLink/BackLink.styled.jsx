import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import arrow from 'images/arrow_back_24px.svg';

export const StyledBackLink = styled(Link)`
  text-decoration: none;
  align-items: center;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 4px 50%;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  padding-left: 32px;
`;
