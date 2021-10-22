import React from 'react';
import { CharacterSides } from '../../types/CharacterSides';

import * as S from './styles'

type CharacterProps = {
  x: number;
  y: number;
  side: CharacterSides,
  name: string;
}

export const Character: React.FC<CharacterProps> = ({ x, y, side, name }) => {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  };

  return (
    <S.Container size={size} left={x * size} top={y * size} side={sides[side] ?? 0}>
      <S.InfoName>{name}</S.InfoName>
    </S.Container>
  );
}