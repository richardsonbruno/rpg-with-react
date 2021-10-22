import React, { useCallback, useEffect } from 'react';

import * as S from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App: React.FC = () => {
  const { x, y, moveLeft, moveUp, moveDown, moveRight, side, name } = useCharacter('Mary');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        moveLeft();
        break;

      case 'KeyW':
      case 'ArrowUp':
        moveUp();
        break;

      case 'KeyD':
      case 'ArrowRight':
        moveRight();
        break;

      case 'KeyS':
      case 'ArrowDown':
        moveDown();
        break;
    }
  }, [moveDown, moveLeft, moveRight, moveUp])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, [handleKeyDown])

  return (
    <S.Container>
      <S.Map>
        <Character x={x} y={y} side={side} name={name} />
      </S.Map>
    </S.Container>
  );
}

export default App;