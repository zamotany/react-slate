import Text from './Text';
import ContainerBase from './ContainerBase';

export default class Paragraph extends ContainerBase<Text | Paragraph> {
  static TAG = 'PARAGRAPH_NODE';
}
