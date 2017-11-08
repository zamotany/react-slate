/* @flow */

export function getStyleProps(style: any = {}) {
  const inline = style.display === 'inline';
  return {
    marginTop: style.marginTop || 0,
    marginBottom: style.marginBottom || 0,
    marginLeft: style.marginLeft || 0,
    marginRight: style.marginRight || 0,
    paddingTop: style.paddingTop || 0,
    paddingBottom: style.paddingBottom || 0,
    paddingLeft: style.paddingLeft || 0,
    paddingRight: style.paddingRight || 0,
    height: style.height || (inline ? 0 : 1),
    width: style.width || -1,
    inline,
  };
}
