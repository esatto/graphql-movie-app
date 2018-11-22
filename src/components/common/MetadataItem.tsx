import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  border-right: solid 1px #ddd;
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }
`;

const Title = styled.div`
  color: #aaa;
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const Content = styled.div`
  color: #000;
  font-weight: 500;
  font-size: 1rem;
`;

export const MetadataItem: React.FC<{
  title: string;
  content: string | number;
}> = props => (
  <Wrapper>
    <div>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
    </div>
  </Wrapper>
);
