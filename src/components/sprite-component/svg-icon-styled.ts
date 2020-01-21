import styled from '@emotion/styled';
import sprite from './static/sprite.png';

interface SpriteProps {
  width?: string;
  height?: string;
  positionX?: string;
  positionY?: string;
}

export const SpriteWrapper = styled('div')<SpriteProps>`
  width: ${props => props.width || '37px'};
  height: ${props => props.height || '37px'};
  background-image: url(${sprite});
  background-position-x: ${props => props.positionX || '-46px'};
  background-position-y: ${props => props.positionY || '0'};
  background-repeat: no-repeat;
`;
