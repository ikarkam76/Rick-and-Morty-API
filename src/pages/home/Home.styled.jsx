import styled from '@emotion/styled';
import logoMob from 'images/PngItem_mobile.png'
import logoDesk from 'images/PngItem_desktop.png'


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

export const ButtonContainer = styled.div`
  margin-top: 100px;
  text-align: center;
`;

export const LogInButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.15px;
  color: #203745;
  background-color: #41b4c9;
  border: 1px solid #203745;
  box-shadow: 0px 1px 5px rgba(191, 222, 66, 0.4),
    0px 2px 4px rgba(191, 222, 66, 0.2), 0px 4px 4px rgba(191, 222, 66, 0.3);

  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 200px;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.30px;
  }
`;

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