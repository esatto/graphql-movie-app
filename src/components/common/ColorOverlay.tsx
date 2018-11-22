import styled from 'styled-components';

export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    hsla(262, 100%, 50%, 0.1),
    hsla(262, 100%, 50%, 0.3)
  );
`;
