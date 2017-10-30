/* @flow */

import dedent from 'dedent';
import ContainerNode from '../ContainerNode';

jest.mock('readline');
jest.mock('../../effects/clearCallbacksOnExit');
jest.mock('../../effects/enhanceConsole');
jest.mock('../../effects/terminal');

describe('nodes/ContainerNode', () => {
  it('should create instance with stream and options', () => {
    const stream = {};
    const options = {
      debug: false,
      hideCursor: true,
      clearOnExit: true,
      clearScrollBackOnExit: true,
      exitOnWarning: true,
      exitOnError: true,
    };

    const instance = new ContainerNode(stream, options);

    expect(instance.stream).toBe(stream);
    expect(instance.options).toEqual(options);
    expect(instance.children).toEqual([]);
    expect(instance.elements).toEqual([]);
    expect(instance.frontBuffer).toBe('');
    expect(instance.backBuffer).toBe('');
  });

  it('should append child', () => {
    const stream = {};
    const childA: any = {};
    const childB: any = {};
    const instance = new ContainerNode(stream);

    instance.appendChild(childA);
    instance.appendChild(childB);

    expect(instance.children).toHaveLength(2);
    expect(instance.children[0]).toBe(childA);
    expect(instance.children[1]).toBe(childB);
    expect(childA.parent).toBe(instance);
    expect(childB.parent).toBe(instance);
  });

  it('should prepend child', () => {
    const stream = {};
    const childA: any = {};
    const childB: any = {};
    const childC: any = {};
    const instance = new ContainerNode(stream);

    instance.appendChild(childA);
    instance.appendChild(childB);
    instance.prependChild(childC, childB);

    expect(instance.children).toHaveLength(3);
    expect(instance.children[0]).toBe(childA);
    expect(instance.children[1]).toBe(childC);
    expect(instance.children[2]).toBe(childB);
    expect(childA.parent).toBe(instance);
    expect(childB.parent).toBe(instance);
    expect(childC.parent).toBe(instance);
  });

  it('should remove child', () => {
    const stream = {};
    const childA: any = {};
    const childB: any = {};
    const childC: any = {};
    const instance = new ContainerNode(stream);

    instance.appendChild(childA);
    instance.appendChild(childB);
    instance.appendChild(childC);

    expect(instance.children).toHaveLength(3);

    instance.removeChild(childB);

    expect(instance.children).toHaveLength(2);
    expect(instance.children[0]).toBe(childA);
    expect(instance.children[1]).toBe(childC);
  });

  it('should append element', () => {
    const stream = {};
    const elementA: any = {};
    const elementB: any = {};
    const instance = new ContainerNode(stream);

    instance.appendElement(elementA);
    instance.appendElement(elementB);

    expect(instance.elements).toHaveLength(2);
    expect(instance.elements[0]).toBe(elementA);
    expect(instance.elements[1]).toBe(elementB);
  });

  it('should diff buffers', () => {
    const stream = {};
    const instance = new ContainerNode(stream, {
      renderOptimizations: true,
    });

    instance.backBuffer = dedent`
      First line
      Second line
      Third line
      Fourth line
      Fifth line
    `;

    instance.frontBuffer = dedent`
      First line
      Second line
      Third line changed
      Fourth line
      Fifth line
    `;

    expect(instance.diffBuffers()).toBe(2);

    instance.frontBuffer = dedent`
      First line
      Second line
      Third line
      Fourth line
    `;

    expect(instance.diffBuffers()).toBe(4);
  });

  it('should get output from buffer', () => {
    const stream = {};
    const instance = new ContainerNode(stream);
    const buffer = dedent`
      First line
      Second line
      Third line
      Fourth line
      Fifth line
    `;

    instance.frontBuffer = buffer;

    expect(instance.getOutput()).toBe(`${buffer}\n`);
    expect(instance.getOutput(3)).toBe(dedent`
      Fourth line
      Fifth line\n
    `);
  });

  it('should flush output from buffer', () => {
    const stream = { write: jest.fn() };
    const instance = new ContainerNode(stream);

    instance.frontBuffer = '';
    instance.children = Array.from({ length: 5 }).map((_, i) => ({
      render() {
        instance.appendElement({
          x: i,
          y: i,
          parentsOffsetX: 0,
          parentsOffsetY: 0,
          text: `Line: ${i + 1}`,
        });
      },
    }));

    instance.flush();

    expect(stream.write).toHaveBeenCalledTimes(1);
    expect(stream.write).toBeCalledWith(dedent`
      Line: 1
       Line: 2
        Line: 3
         Line: 4
          Line: 5\n
    `);

    instance.flush();

    expect(stream.write).toHaveBeenCalledTimes(1);
  });
});
