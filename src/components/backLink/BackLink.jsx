import { StyledBackLink } from "./BackLink.styled";

export const BackLink = ({ to, children }) => {
  return <StyledBackLink to={to}>{children}</StyledBackLink>;
};