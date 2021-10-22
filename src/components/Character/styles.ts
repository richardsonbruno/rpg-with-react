import styled from 'styled-components';

type ContainerProps = {
  size: number;
  left: number;
  top: number;
  side: number;
}

export const Container = styled.div<ContainerProps>`
  background-image: url('./assets/char.png');
  background-position: 0 ${({side}) => side}px;
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;

  position: absolute;
  left: ${({left}) => left}px;
  top: ${({top}) => top}px;
`;

export const InfoName = styled.span`
  background-color: #fff;
  font-family: 'Oswald', sans-serif;
  color: #707070;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  margin-left: -60%;
  top: -25px;
  pointer-events: none;
`;