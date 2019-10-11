export { terminal } from 'terminal-kit';

export { default as renderToJson } from './renderToJson';
export { default as renderToString } from './renderToString';
export { default as renderFullscreen, exit } from './renderFullscreen';
export { default as render, withRenderStatic, useRenderStatic } from './render';

export { default as View, Props as ViewProps } from './components/View';
export { default as Text, Props as TextProps } from './components/Text';
export { default as Progress } from './components/Progress';
export { default as Spinner } from './components/Spinner';

export { TextTransform, JsonText, JsonView, JsonParagraph } from './types';
