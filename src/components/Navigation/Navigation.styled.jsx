import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 25px;
`;
export const Link = styled(NavLink)`
  color: #ffffff;
  font-size: 30px;
  line-height: 20px;
  font-weight: 600;
  &.active {
    color: black;
  }
  /* :hover {
    color: #e84a5f;
  } */
`;
