/* @flow */

import * as React from 'react';

import type { Style } from '../types';

type Children = React.Element<*> | string | number | Array<Children>;
type Props = {
  style?: Style,
  children: Children,
};

const ViewNode = 'VIEW_NODE';

export default function View(props: Props) {
  const { children, style, ...rest } = props;
  return (
    <ViewNode style={style} {...rest}>
      {children}
    </ViewNode>
  );
}
