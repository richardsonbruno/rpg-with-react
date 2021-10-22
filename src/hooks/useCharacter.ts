import { useCallback, useState } from "react"
import { CharacterSides } from "../types/CharacterSides";
import { mapSpots } from "../data/mapSpots";

export const useCharacter = (propName: string) => {
  const [name] = useState<string>(propName);
  const [pos, setPos] = useState({
    x: 3,
    y: 5
  });
  const [side, setSide] = useState<CharacterSides>('down')

  const canMove = (x: number, y: number) => {
    if (mapSpots[y] !== undefined && mapSpots[y][x] !== undefined && mapSpots[y][x] === 1) {
      return true;
    }

    return false;
  }

  const moveLeft = useCallback(() => {
    setPos(pos => ({
      x: canMove(pos.x - 1, pos.y) ? pos.x - 1 : pos.x,
      y: pos.y,
    }))

    setSide('left')
  }, [])

  const moveRight = useCallback(() => {
    setPos(pos => ({
      x: canMove(pos.x + 1, pos.y) ? pos.x + 1 : pos.x,
      y: pos.y,
    }))

    setSide('right')
  }, [])

  const moveDown = useCallback(() => {
    setPos(pos => ({
      ...pos,
      y: canMove(pos.x, pos.y + 1) ? pos.y + 1 : pos.y,
    }))
    setSide('down')
  }, [])

  const moveUp = useCallback(() => {
    setPos(pos => ({
      ...pos,
      y: canMove(pos.x, pos.y - 1) ? pos.y - 1 : pos.y,
    }))
    setSide('up')
  }, [])

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
    name
  }
}