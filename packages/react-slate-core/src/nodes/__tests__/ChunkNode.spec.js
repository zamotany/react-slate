/* @flow */

import ChunkNode from '../ChunkNode';
import TextNode from '../TextNode';
import ContainerNode from '../ContainerNode';
import AbsoluteCanvas from '../../host/AbsoluteCanvas';
import colors from '../../constants/colors';

function withChildren(instance, children) {
  children.forEach(instance.appendInitialChild.bind(instance));
  return instance;
}

function getNodeProps(props = {}) {
  return {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    width: -1,
    height: 0,
    children: null,
    inline: false,
    fixed: false,
    x: 0,
    y: 0,
    z: 0,
    stylizeArgs: {},
    ...props,
  };
}

function getCanvasMock() {
  return new AbsoluteCanvas({ width: 10, height: 10 });
}

describe('nodes/ChunkNode', () => {
  describe('render method', () => {
    it('should render TextNodes one after another', () => {
      // <Text>
      //   {'Text1'}
      //   {'Text2'}
      // </Text>
      const container = (({}: any): ContainerNode);
      // $FlowFixMe
      const rootNode = new ChunkNode(container, getNodeProps());
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text2' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual(['Text1Text2']);
    });

    it('should render TextNodes separated by 3rd node with \\n', () => {
      // <Text marginTop={1}>
      //   {'Text1'}
      //   {'\n'}
      //   {'Text2'}
      // </Text>
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          marginTop: 1,
        })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );
      rootNode.appendInitialChild(new TextNode(container, { children: '\n' }));
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text2' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        '',
        'Text1',
        'Text2',
      ]);
    });

    it('should render TextNodes separated by \\n', () => {
      // <Text marginTop={1}>
      //   {'Text1\n'}
      //   {'Text2'}
      // </Text>
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(container, getNodeProps({ marginTop: 1 }));
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1\n' })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text2' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        '',
        'Text1',
        'Text2',
      ]);
    });

    it('should render ChunkNodes one below another', () => {
      // <Text>
      //   <Text>
      //     <Text>Text1</Text>
      //     <Text>Text2</Text>
      //   </Text>
      //   <Text>Text3</Text>
      // </Text>
      const container = (({}: any): ContainerNode);
      // $FlowFixMe
      const rootNode = new ChunkNode(container, getNodeProps());
      rootNode.appendInitialChild(
        withChildren(new ChunkNode(container, getNodeProps()), [
          withChildren(new ChunkNode(container, getNodeProps()), [
            new TextNode(container, { children: 'Text1' }),
          ]),
          withChildren(new ChunkNode(container, getNodeProps()), [
            new TextNode(container, { children: 'Text2' }),
          ]),
        ])
      );
      rootNode.appendInitialChild(
        withChildren(new ChunkNode(container, getNodeProps()), [
          new TextNode(container, { children: 'Text3' }),
        ])
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        'Text1',
        'Text2',
        'Text3',
      ]);
    });

    it('should render TextNode and inlined ChunkNodes in the same line', () => {
      // <Text>
      //   Text1
      //   <Text inline>Text2</Text>
      // </Text>
      const container = (({}: any): ContainerNode);
      // $FlowFixMe
      const rootNode = new ChunkNode(container, getNodeProps());
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );
      rootNode.appendInitialChild(
        withChildren(new ChunkNode(container, getNodeProps({ inline: true })), [
          new TextNode(container, { children: 'Text2' }),
        ])
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual(['Text1Text2']);
    });

    it('should add margins (shallow)', () => {
      // <Text
      //   marginTop={2}
      //   marginBottom={1}
      //   marginLeft={2}
      //   marginRight={2}
      // >
      //   {'Text1\n'}
      //   {'Text2'}
      // </Text>
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          marginTop: 2,
          marginBottom: 1,
          marginLeft: 2,
          marginRight: 2,
        })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1\n' })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text2' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        '',
        '',
        '\0\0Text1\0\0',
        '\0\0Text2\0\0',
        '',
      ]);
    });

    it('should add margins indentation (nested)', () => {
      // <Text
      //   marginTop={2}
      //   marginBottom={1}
      //   marginLeft={2}
      //   marginRight={2}
      // >
      //   Text1
      //   <Text
      //     marginTop={1}
      //     marginBottom={1}
      //     marginLeft={1}
      //     marginRight={1}
      //   >
      //     Text2
      //   </Text>
      //   Text3
      // </Text>
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          marginTop: 2,
          marginBottom: 1,
          marginLeft: 2,
          marginRight: 2,
        })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );
      rootNode.appendInitialChild(
        withChildren(
          new ChunkNode(
            container,
            getNodeProps({
              marginTop: 1,
              marginRight: 1,
              marginBottom: 1,
              marginLeft: 1,
            })
          ),
          [new TextNode(container, { children: 'Text2' })]
        )
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text3' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        '',
        '',
        '\0\0Text1\0\0',
        '\0'.repeat(4),
        '\0\0\0Text2\0\0\0',
        '\0'.repeat(4),
        '\0\0Text3\0\0',
        '',
      ]);
    });

    it('should render a valid representation of the tree', () => {
      // <Text
      //   marginTop={1}
      //   marginBottom={1}
      //   paddingLeft={2}
      //   paddingRight={2}
      //   paddingTop={1}
      //   paddingBottom={1}
      //   width={9}
      //   height={5}
      // >
      //   <Text marginLeft={1} marginRight={1}>
      //     <Text inline>A</Text>
      //     <Text inline>B</Text>
      //     <Text inline>C</Text>
      //   </Text>
      //   <Text marginTop={1}>
      //     Text1
      //   </Text>
      // </Text>

      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          marginTop: 1,
          marginBottom: 1,
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
          width: 9,
          height: 5,
        })
      );
      rootNode.appendInitialChild(
        withChildren(
          new ChunkNode(
            container,
            getNodeProps({
              marginLeft: 1,
              marginRight: 1,
            })
          ),
          [
            withChildren(
              new ChunkNode(container, getNodeProps({ inline: true })),
              [new TextNode(container, { children: 'A' })]
            ),
            withChildren(
              new ChunkNode(container, getNodeProps({ inline: true })),
              [new TextNode(container, { children: 'B' })]
            ),
            withChildren(
              new ChunkNode(container, getNodeProps({ inline: true })),
              [new TextNode(container, { children: 'C' })]
            ),
          ]
        )
      );
      rootNode.appendInitialChild(
        withChildren(
          new ChunkNode(
            container,
            getNodeProps({
              marginTop: 1,
            })
          ),
          [new TextNode(container, { children: 'Text1' })]
        )
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual([
        '\0'.repeat(9),
        ' '.repeat(9),
        '  \0ABC\0  ',
        ' '.repeat(9),
        '  Text1  ',
        ' '.repeat(9),
        '\0'.repeat(9),
      ]);
    });

    it('should append fixed subtree in global canvas', () => {
      /**
       * <Text style={{ position: 'fixed', left: 1, top: 1 }}>
       *   <Text style={{ marginBottom: 1 }}>Text1</Text>
       *   {'Text2A\nText2B'}
       * </Text>
       */

      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          fixed: true,
          x: 1,
          y: 1,
        })
      );
      rootNode.appendInitialChild(
        withChildren(
          new ChunkNode(
            container,
            getNodeProps({
              marginBottom: 1,
            })
          ),
          [new TextNode(container, { children: 'Text1' })]
        )
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text2A\nText2B' })
      );

      const absoluteCanvas = getCanvasMock();
      expect(absoluteCanvas.flatten(rootNode.render(absoluteCanvas))).toEqual([
        ' '.repeat(10),
        ' Text1    ',
        ' '.repeat(10),
        ' Text2A   ',
        ' Text2B   ',
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
      ]);
    });

    it('should properly layout nested fixed subtree', () => {
      /**
       * <Text style={{ position: 'fixed', left: 1, top: 1 }}>
       *   {'Text1'}
       *   <Text style={{
       *     position: 'fixed',
       *     left: 2,
       *     top: 0
       *   }}>Text2</Text>
       * </Text>
       */

      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          fixed: true,
          x: 1,
          y: 1,
        })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );
      rootNode.appendInitialChild(
        withChildren(
          new ChunkNode(
            container,
            getNodeProps({
              fixed: true,
              x: 2,
              y: 0,
            })
          ),
          [new TextNode(container, { children: 'Text2' })]
        )
      );

      const absoluteCanvas = getCanvasMock();
      expect(absoluteCanvas.flatten(rootNode.render(absoluteCanvas))).toEqual([
        '  Text2   ',
        ' Text1    ',
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
        ' '.repeat(10),
      ]);
    });

    it('should use custom render prop', () => {
      const customRender = jest.fn((instance, localCanvas, absoluteCanvas) => {
        expect(instance.children.length).toBe(1);
        expect(absoluteCanvas).toBeDefined();
        localCanvas.canvas.push('CustomText');
        return localCanvas;
      });
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          fixed: true,
          x: 1,
          y: 1,
          internal_do_not_use_render: customRender,
        })
      );
      rootNode.appendInitialChild(
        new TextNode(container, { children: 'Text1' })
      );

      expect(rootNode.render(getCanvasMock()).canvas).toEqual(['CustomText']);

      expect(customRender).toHaveBeenCalled();
    });
  });

  describe('styling', () => {
    function getTextMock(textNodeProps, text, additionalProps = {}) {
      const container = (({}: any): ContainerNode);
      const rootNode = new ChunkNode(
        container,
        getNodeProps({
          ...additionalProps,
          stylizeArgs: textNodeProps,
        })
      );
      rootNode.appendInitialChild(new TextNode(container, { children: text }));

      return rootNode.render(getCanvasMock()).canvas.join('\n');
    }

    it('respects color and background color', () => {
      const colored = getTextMock(
        {
          color: colors.magenta,
          backgroundColor: colors.cyan,
        },
        'Hello world'
      );
      expect(colored).toMatchSnapshot();
    });

    it('respects fontWeight', () => {
      const bold = getTextMock(
        {
          fontWeight: 'bold',
        },
        'Hello world'
      );
      const normal = getTextMock(
        {
          fontWeight: 'normal',
        },
        'Hello world'
      );

      expect(bold).toMatchSnapshot();
      expect(normal).toMatchSnapshot();
    });

    it('respects fontStyle', () => {
      const italic = getTextMock({ fontStyle: 'italic' }, 'Hello world');
      const normal = getTextMock({ fontStyle: 'normal' }, 'Hello world');
      expect(italic).toMatchSnapshot();
      expect(normal).toMatchSnapshot();
    });

    it('respects textDecoration', () => {
      const underline = getTextMock(
        { textDecoration: 'underline' },
        'Hello world'
      );
      const lineThrough = getTextMock(
        { textDecoration: 'line-through' },
        'Hello world'
      );
      const normal = getTextMock({ textDecoration: 'normal' }, 'Hello world');
      expect(underline).toMatchSnapshot();
      expect(lineThrough).toMatchSnapshot();
      expect(normal).toMatchSnapshot();
    });

    it('respects textTransform', () => {
      const capitalize = getTextMock(
        { textTransform: 'capitalize' },
        'Hello world'
      );
      const uppercase = getTextMock(
        { textTransform: 'uppercase' },
        'Hello world'
      );
      const lowercase = getTextMock(
        { textTransform: 'lowercase' },
        'Hello world'
      );
      const none = getTextMock({ textTransform: 'none' }, 'Hello world');
      expect(capitalize).toMatchSnapshot();
      expect(uppercase).toMatchSnapshot();
      expect(lowercase).toMatchSnapshot();
      expect(none).toMatchSnapshot();
    });

    it('respects visibility', () => {
      const visible = getTextMock({ visibility: 'visible' }, 'Hello world');
      const hidden = getTextMock({ visibility: 'hidden' }, 'Hello world');
      expect(visible).toMatchSnapshot();
      expect(hidden).toMatchSnapshot();
    });

    it('adds border', () => {
      expect(
        getTextMock({ borderStyle: 'solid' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock({ borderStyle: 'double' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock({ borderStyle: 'none' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock(
          { borderStyle: 'solid', borderColor: 'ansi-red' },
          'Hello world'
        )
      ).toMatchSnapshot();
      expect(
        getTextMock(
          {
            borderStyle: 'solid',
            borderColor: 'ansi-red',
            backgroundColor: 'ansi-blue',
          },
          'Hello world'
        )
      ).toMatchSnapshot();
      expect(
        getTextMock(
          {
            borderStyle: 'solid',
          },
          'Hello world',
          {
            width: 15,
            height: 3,
          }
        ).replace(/\0/g, ' ')
      ).toMatchSnapshot();
      expect(
        getTextMock(
          {
            borderStyle: 'solid',
          },
          'Hello world',
          {
            width: 15,
            height: 4,
          }
        ).replace(/\0/g, ' ')
      ).toMatchSnapshot();
      expect(
        getTextMock(
          {
            borderStyle: 'solid',
          },
          'Hello\nworld',
          {
            width: 15,
            height: 3,
          }
        ).replace(/\0/g, ' ')
      ).toMatchSnapshot();
    });

    it('aligns text', () => {
      expect(
        getTextMock({ textAlign: 'left' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'center' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'right' }, 'Hello world')
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'left' }, 'Hello world', { width: 21 })
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'center' }, 'Hello world', { width: 21 })
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'right' }, 'Hello world', { width: 21 })
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'left' }, 'Hello world', { width: 20 })
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'center' }, 'Hello world', { width: 20 })
      ).toMatchSnapshot();
      expect(
        getTextMock({ textAlign: 'right' }, 'Hello world', { width: 20 })
      ).toMatchSnapshot();
      expect(
        getTextMock(
          { textAlign: 'left', borderStyle: 'solid' },
          'Hello world',
          { width: 21 }
        )
      ).toMatchSnapshot();
      expect(
        getTextMock(
          { textAlign: 'center', borderStyle: 'solid' },
          'Hello world',
          { width: 21 }
        )
      ).toMatchSnapshot();
      expect(
        getTextMock(
          { textAlign: 'right', borderStyle: 'solid' },
          'Hello world',
          { width: 21 }
        )
      ).toMatchSnapshot();
    });
  });
});

//   xit('should render tree of nodes to a string', () => {
//     const elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//     };

//     const rootNode = getTreeFixture(container);
//     expect(rootNode.render()).toEqual([
//       '  ',
//       '  ',
//       '  ',
//       '  Text1',
//       '    Text2',
//       '  Text3',
//       '  Text4  ',
//       '  Text5  ',
//       '  Text6',
//     ]);
//   });

//   xit('should memoize rendered elements', () => {
//     const elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.render();

//     function runAssertionsForNodes(nodes) {
//       nodes.forEach(node => {
//         if (node instanceof ChunkNode) {
//           expect(node.hasChildrenChanged).toBeFalsy();
//           expect(node.memoizedElements.length).toBeGreaterThan(0);
//           runAssertionsForNodes(node.children);
//         }
//       });
//     }

//     runAssertionsForNodes([rootNode]);

//     expect(rootNode.memoizedElements).toEqual(elements);
//   });

//   xit('should invalidate changed path', () => {
//     let elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//       invalidateParent: jest.fn(),
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.parent = container;
//     rootNode.render();

//     rootNode.children[0].children[1].children[0].replaceChildren('NewText');

//     expect(container.invalidateParent).toHaveBeenCalled();
//     expect(rootNode.hasChildrenChanged).toBeTruthy();
//     expect(rootNode.children[0].hasChildrenChanged).toBeTruthy();
//     expect(rootNode.children[0].children[1].hasChildrenChanged).toBeTruthy();

//     const oldElements = [...elements];
//     elements = [];
//     rootNode.render();

//     expect(oldElements).not.toEqual(elements);
//     expect(oldElements.length).toBe(elements.length);
//     expect(elements[1].text).toEqual('NewText');
//     expect([elements[0], ...elements.slice(2)]).toEqual([
//       oldElements[0],
//       ...oldElements.slice(2),
//     ]);
//   });

//   xit('should invalidate when new node is added', () => {
//     let elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//       invalidateParent: jest.fn(),
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.parent = container;
//     rootNode.render();

//     rootNode.children[1].appendChild(
//       // $FlowFixMe
//       new TextNode(container, { children: 'Added' })
//     );

//     expect(rootNode.hasChildrenChanged).toBeTruthy();
//     expect(rootNode.children[0].hasChildrenChanged).toBeFalsy();
//     expect(rootNode.children[1].hasChildrenChanged).toBeTruthy();

//     const oldElements = [...elements];
//     elements = [];
//     rootNode.render();

//     expect(elements).toEqual([
//       ...oldElements.slice(0, 4),
//       elements[4],
//       oldElements[4],
//     ]);
//   });

//   xit('should invalidate when node is removed', () => {
//     let elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//       invalidateParent: jest.fn(),
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.parent = container;
//     rootNode.render();

//     rootNode.removeChild(rootNode.children[1]);

//     expect(rootNode.hasChildrenChanged).toBeTruthy();

//     const oldElements = [...elements];
//     elements = [];
//     rootNode.render();

//     expect(elements).toEqual([...oldElements.slice(0, 3), oldElements[4]]);
//   });

//   xit('should invalidate children when position is updated', () => {
//     let elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//       invalidateParent: jest.fn(),
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.parent = container;
//     rootNode.render();

//     rootNode.props.x += 2;
//     rootNode.props.y += 2;

//     const oldElements = [...elements];
//     elements = [];
//     rootNode.render();

//     expect(elements).toEqual(
//       oldElements.map(e => ({
//         ...e,
//         parentsOffsetX: e.parentsOffsetX + 2,
//         parentsOffsetY: e.parentsOffsetY + 2,
//       }))
//     );
//   });

//   xit('should prepend child', () => {
//     let elements = [];
//     const container = {
//       appendElement(element) {
//         elements.push(element);
//       },
//       invalidateParent: jest.fn(),
//     };

//     const rootNode = getTreeFixture(container);
//     rootNode.parent = container;
//     rootNode.render();

//     rootNode.prependChild(
//       // $FlowFixMe
//       new TextNode(container, { children: 'Appended' }),
//       rootNode.children[1]
//     );

//     expect(rootNode.hasChildrenChanged).toBeTruthy();

//     const oldElements = [...elements];
//     elements = [];
//     rootNode.render();

//     expect(elements).toEqual([
//       ...oldElements.slice(0, 3),
//       {
//         x: 0,
//         y: 0,
//         parentsOffsetX: 2,
//         parentsOffsetY: 0,
//         text: 'Appended',
//       },
//       ...oldElements.slice(3),
//     ]);
//   });
// });
