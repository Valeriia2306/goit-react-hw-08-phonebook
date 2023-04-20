import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  gap: 10px;
   /* /* justify-content: center; */
  align-items: center; */
`;
export const UserTitle = styled.p`
  color: #ffffff;
  font-size: 25px;
  line-height: 20px;
  font-weight: 600;
  margin: 0;
`;
export const Button = styled.button`
  cursor: pointer;

  padding: 5px 10px;
  color: black;
  border: none;
  /* border: 1px solid #c8c8c8; */
  display: inline-block;
  border-radius: 10px;
  background-color: #f5f4fa;
  font-weight: 600;
  font-size: 18px;
  :hover {
    background-color: #e84a5f;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3), 0 4px 7px 0 rgba(0, 0, 0, 0.19);
  }
`;
