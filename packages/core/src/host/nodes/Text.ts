import assert from 'assert';
import stripAnsi from 'strip-ansi';
import Base from './Base';

export type TextStyle = {
  color?: string;
  bgColor?: string;
  modifiers?: string[];
};

export default class Text extends Base<never> {
  static TAG = 'TEXT_NODE';

  private body: string = '';

  setBody(body: string) {
    assert(!body.includes('\n'), 'Text body cannot have new line characters');
    this.body = body;
    this.layoutNode.setStyle({
      width: stripAnsi(this.body).length,
      height: 1,
    });
  }

  getBody(): string {
    return this.body;
  }
}
