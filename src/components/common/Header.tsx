import React from 'react';
import styled from 'styled-components';
import { BackButton } from './BackButton';
import { SquarePoster } from './SquarePoster';

interface Props {
  imageUrl: string;
}

const Wrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
`;

export const Header: React.FC<Props> = ({ imageUrl, children }) => (
  <Wrapper>
    <SquarePoster src={imageUrl} />
    <ContentWrapper>{children}</ContentWrapper>
    <BackButton />
  </Wrapper>
);
