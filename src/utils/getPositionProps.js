/* @flow */

export default function getPositionProps(props) {
  const { x, y } = props;
  const relative = typeof x !== 'number' && typeof x !== 'number';
  return {
    x: x || 0,
    y: y || 0,
    relative,
  };
}
