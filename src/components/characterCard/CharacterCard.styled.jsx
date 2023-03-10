import styled from '@emotion/styled';

export const InfoContainer = styled.div`
    text-align: center;
`;


export const InfoImg = styled.img`
  height: 148px;
  margin-top: 74px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;

  @media screen and (min-width: 1440px) {
    height: 300px;
    margin-top: 31px;
  }
`;

export const InfoName = styled.h2`
  margin-top: 34px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 56px;
  }
`;

export const InfoBlock = styled.div`
  width: 312px;
  margin-top: 34px;
  text-align: start;

  @media screen and (min-width: 1440px) {
    width: 413px;
    margin-top: 48px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InfoTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
  color: #8e8e93;

  @media screen and (min-width: 1440px) {
    width: 413px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const InfoLegendBlock = styled.div`
  height: 64px;
  margin-left: 16px;
  padding-top: 9px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const InfoLegendName = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const InfoLegendDesc = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
`;