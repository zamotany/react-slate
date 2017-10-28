/* @flow */

export default function getPositionProps(props: { x?: number, y?: number }) {
  const { x, y } = props;
  return {
    x: x || 0,
    y: y || 0,
  };
}
