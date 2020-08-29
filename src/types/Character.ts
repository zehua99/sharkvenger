import { PointLike, ArrayScale } from 'types/Common';

export interface CharacterProps {
  initialPosition?: ArrayScale;
  initialScale?: PointLike;
  initialAngle?: number;
  expression?: string;
  movements?: string[];
}

export const DEFAULT_CHARACTER_PROPS = {
  initialScale: 1,
  initialAngle: 0,
};
