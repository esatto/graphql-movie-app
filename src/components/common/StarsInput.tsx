import React from 'react';
import styled from 'styled-components';
import { Star } from './Star';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const Wrapper = styled.div`
  display: flex;
`;

export const StarsInput: React.FC<Props> = props => {
  const onStarClick = (num: number) => (ev: React.MouseEvent) => {
    props.onChange(num);
  };

  const stars = [...Array(10)].map((_, i) => (
    <Star key={i} active={props.value > i} onClick={onStarClick(i + 1)} />
  ));

  return <Wrapper>{stars}</Wrapper>;
};
