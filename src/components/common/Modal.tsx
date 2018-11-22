import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

const portalElement = document.createElement('div');

document.body.appendChild(portalElement);

const fadeIn = keyframes`
  from { opacity: 0; }
`;

const slideUp = keyframes`
  from { transform: translateY(100%) }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    hsla(262, 100%, 5%, 0.6),
    hsla(262, 100%, 5%, 0.8)
  );
  will-change: opacity;
  animation: ${fadeIn} 0.25s;
`;

const Content = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  border-radius: 15px 15px 0 0;
  padding: 0 1.5rem 1.5rem;
  will-change: transform;
  animation: ${slideUp} 0.3s;
`;

interface Props {
  active: boolean;
  close: () => void;
}

export const Modal: React.FC<Props> = ({ active, children, close }) => {
  if (!active) return null;

  const portal = (
    <Wrapper>
      <Background onClick={close} />
      <Content>{children}</Content>
    </Wrapper>
  );

  return createPortal(portal, portalElement);
};
