import styled from 'styled-components';

export const Button = styled.button`
  background: linear-gradient(hsla(268, 100%, 50%, 1), hsla(262, 100%, 50%, 1));
  color: #fff;
  border-radius: 1000px;
  padding: 0.7em 1.5em;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px hsla(268, 100%, 20%, 0.1);
  transition: all 0.25s;

  &:hover {
    background: linear-gradient(
      hsla(268, 100%, 55%, 1),
      hsla(262, 100%, 55%, 1)
    );
    box-shadow: 0 5px 10px hsla(268, 100%, 20%, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 5px 10px hsla(268, 100%, 20%, 0.4);
    transform: translateY(0px);
    transition: all 0.25s, transform 0s;
  }
`;
