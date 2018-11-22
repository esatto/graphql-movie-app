import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
  padding: 0.4rem 0;
  outline: none;
  border: none;
  border-bottom: solid 1px #000;
  font-size: 1rem;
  position: relative;
  background-color: transparent;
  transition: border-bottom-color 0.25s;

  &:focus {
    border-bottom-color: hsla(262, 100%, 50%, 1);
  }
`;
