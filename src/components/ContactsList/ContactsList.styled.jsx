import styled from '@emotion/styled';

export const Info = styled.li`
  display: inline-block;
  margin-bottom: 10px;
  min-width: 200px;
`;

export const Span = styled.span`
  margin-left: 20px;
`;

export const Button = styled.span`
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  text-align: start;
  font: 400 11px system-ui;
  cursor: pointer;
  border-radius: 5px;

  :hover,
  :focus {
    border-color: rgb(197, 167, 138);
    background-color: rgb(197, 167, 138);
  }
`;
