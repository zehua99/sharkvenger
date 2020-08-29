export type ArrayScale = [number, number];
export type ObjectScale = { x: number; y: number };
export type Scale = number | [number] | ObjectScale | ArrayScale;
export type PointLike = Scale;