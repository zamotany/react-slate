/* @flow */

export default function getPositionProps(props) {
  const { x, y } = props;
  return {
    x: x || 0,
    y: y || 0,
  };
}
