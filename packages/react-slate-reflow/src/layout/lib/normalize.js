/* @flow */

export default function normalize(
  value: { [key: string]: * },
  alternativeValue: * = null
) {
  const keys = Object.keys(value);
  return keys.length
    ? keys.reduce(
        (acc, key) =>
          value[key] !== null && typeof value[key] !== 'undefined'
            ? { ...acc, [key]: value[key] }
            : acc,
        null
      )
    : alternativeValue;
}
