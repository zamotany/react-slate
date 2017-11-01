/* @flow */

import ChunkNode from '../ChunkNode';
import TextNode from '../TextNode';
import ContainerNode from '../ContainerNode';
import { getCanvas } from '../../utils/layout';

function withChildren(instance, children) {
  children.forEach(instance.appendInitialChild.bind(instance));
  return instance;
}

// function getTreeFixture(containerMock) {
// const container = ((containerMock: any): ContainerNode);
// <Text x={2}>
//   <Text y={2}>
//     <Text y={1}>Text1</Text>
//     <Text h={1} x={2}>Text2</Text>
//     {'Text3}
//   </Text>
//   <Text w={7}>
//     {'Text4\n'}
//     {'Text5'}
//   </Text>
//   {'Text6'}
// </Text>
// const rootNode = new ChunkNode(container, {
//   x: 2,
//   y: 0,
//   h: 0,
//   w: 0,
//   children: null,
// });
// rootNode.appendInitialChild(
//   withChildren(
//     new ChunkNode(container, { x: 0, y: 2, h: 0, w: 0, children: null }),
//     [
//       withChildren(
//         new ChunkNode(container, { x: 0, y: 1, h: 0, w: 0, children: null }),
//         [new TextNode(container, { children: 'Text1' })]
//       ),
//       withChildren(
//         new ChunkNode(container, { x: 2, y: 0, h: 1, w: 0, children: null }),
//         [new TextNode(container, { children: 'Text2' })]
//       ),
//       new TextNode(container, { children: 'Text3' }),
//     ]
//   )
// );
// rootNode.appendInitialChild(
//   withChildren(
//     new ChunkNode(container, { x: 0, y: 0, w: 7, h: 0, children: null }),
//     [
//       new TextNode(container, { children: 'Text4\n' }),
//       new TextNode(container, { children: 'Text5' }),
//     ]
//   )
// );
// rootNode.appendInitialChild(new TextNode(container, { children: 'Text6' }));
// return rootNode;
// }

function getNodeProps(props = {}) {
  return {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    children: null,
    ...props,
  };
}

function getCanvasMock() {
  return getCanvas({ width: 10, height: 10 });
}

describe('nodes/ChunkNode', () => {
  it('should render TextNodes one after another', () => {
    // <Text>
    //   {'Text1'}
    //   {'Text2'}
    // </Text>
    const container = (({}: any): ContainerNode);
    const rootNode = new ChunkNode(container, getNodeProps());
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text1' }));
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text2' }));

    expect(rootNode.render(getCanvasMock())).toEqual(['Text1Text2']);
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
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text1' }));
    rootNode.appendInitialChild(new TextNode(container, { children: '\n' }));
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text2' }));

    expect(rootNode.render(getCanvasMock())).toEqual([
      ' '.repeat(10),
      'Text1     ',
      'Text2     ',
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
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text2' }));

    expect(rootNode.render(getCanvasMock())).toEqual([
      ' '.repeat(10),
      'Text1     ',
      'Text2     ',
    ]);
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
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text2' }));

    expect(rootNode.render(getCanvasMock())).toEqual([
      ' '.repeat(10),
      ' '.repeat(10),
      '  Text1   ',
      '  Text2   ',
      ' '.repeat(10),
    ]);
  });

  it('should apply top indentation (nested)', () => {
    // <Text
    //   marginTop={2}
    //   marginBottom={1}
    //   marginLeft={2}
    //   marginRight={2}
    // >
    //   Text1
    //   <Text
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
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text1' }));
    rootNode.appendInitialChild(
      withChildren(
        new ChunkNode(
          container,
          getNodeProps({
            marginTop: 1,
            marginBottom: 1,
            marginLeft: 1,
          })
        ),
        [new TextNode(container, { children: 'Text2' })]
      )
    );
    rootNode.appendInitialChild(new TextNode(container, { children: 'Text3' }));

    expect(rootNode.render(getCanvasMock())).toEqual([
      ' '.repeat(10),
      ' '.repeat(10),
      '  Text1   ',
      ' '.repeat(10),
      '   Text2  ',
      ' '.repeat(10),
      '  Text3   ',
      ' '.repeat(10),
    ]);
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
