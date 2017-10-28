/* @flow */

import ChunkNode from '../ChunkNode';
import TextNode from '../TextNode';
import ContainerNode from '../ContainerNode';

function withChildren(instance, children) {
  children.forEach(instance.appendInitialChild.bind(instance));
  return instance;
}

function getTreeFixture(containerMock) {
  const container = ((containerMock: any): ContainerNode);
  const rootNode = new ChunkNode(container, { x: 2, y: 0, children: null });
  rootNode.appendInitialChild(
    withChildren(new ChunkNode(container, { x: 0, y: 2, children: null }), [
      withChildren(new ChunkNode(container, { x: 0, y: 0, children: null }), [
        new TextNode(container, { children: 'Text1' }),
      ]),
      withChildren(new ChunkNode(container, { x: 2, y: 3, children: null }), [
        new TextNode(container, { children: 'Text2' }),
      ]),
      new TextNode(container, { children: 'Text3' }),
    ])
  );
  rootNode.appendInitialChild(
    withChildren(new ChunkNode(container, { x: 0, y: 0, children: null }), [
      new TextNode(container, { children: 'Text4' }),
    ])
  );
  rootNode.appendInitialChild(new TextNode(container, { children: 'Text5' }));
  return rootNode;
}

describe('nodes/ChunkNode', () => {
  it('should generate a valid elements array from node tree', () => {
    const elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
    };

    const rootNode = getTreeFixture(container);
    rootNode.render();

    expect(elements).toEqual([
      {
        x: 0,
        y: 0,
        parentsOffsetX: 2,
        parentsOffsetY: 2,
        text: 'Text1',
      },
      {
        x: 0,
        y: 0,
        parentsOffsetX: 4,
        parentsOffsetY: 5,
        text: 'Text2',
      },
      {
        x: 0,
        y: 0,
        parentsOffsetX: 2,
        parentsOffsetY: 2,
        text: 'Text3',
      },
      {
        x: 0,
        y: 0,
        parentsOffsetX: 2,
        parentsOffsetY: 0,
        text: 'Text4',
      },
      {
        x: 0,
        y: 0,
        parentsOffsetX: 2,
        parentsOffsetY: 0,
        text: 'Text5',
      },
    ]);
  });

  it('should memoize rendered elements', () => {
    const elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
    };

    const rootNode = getTreeFixture(container);
    rootNode.render();

    function runAssertionsForNodes(nodes) {
      nodes.forEach(node => {
        if (node instanceof ChunkNode) {
          expect(node.hasChildrenChanged).toBeFalsy();
          expect(node.memoizedElements.length).toBeGreaterThan(0);
          runAssertionsForNodes(node.children);
        }
      });
    }

    runAssertionsForNodes([rootNode]);

    expect(rootNode.memoizedElements).toEqual(elements);
  });

  it('should invalidate changed path', () => {
    let elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
      invalidateParent: jest.fn(),
    };

    const rootNode = getTreeFixture(container);
    rootNode.parent = container;
    rootNode.render();

    rootNode.children[0].children[1].children[0].replaceChildren('NewText');

    expect(container.invalidateParent).toHaveBeenCalled();
    expect(rootNode.hasChildrenChanged).toBeTruthy();
    expect(rootNode.children[0].hasChildrenChanged).toBeTruthy();
    expect(rootNode.children[0].children[1].hasChildrenChanged).toBeTruthy();

    const oldElements = [...elements];
    elements = [];
    rootNode.render();

    expect(oldElements).not.toEqual(elements);
    expect(oldElements.length).toBe(elements.length);
    expect(elements[1].text).toEqual('NewText');
    expect([elements[0], ...elements.slice(2)]).toEqual([
      oldElements[0],
      ...oldElements.slice(2),
    ]);
  });

  it('should invalidate when new node is added', () => {
    let elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
      invalidateParent: jest.fn(),
    };

    const rootNode = getTreeFixture(container);
    rootNode.parent = container;
    rootNode.render();

    rootNode.children[1].appendChild(
      // $FlowFixMe
      new TextNode(container, { children: 'Added' })
    );

    expect(rootNode.hasChildrenChanged).toBeTruthy();
    expect(rootNode.children[0].hasChildrenChanged).toBeFalsy();
    expect(rootNode.children[1].hasChildrenChanged).toBeTruthy();

    const oldElements = [...elements];
    elements = [];
    rootNode.render();

    expect(elements).toEqual([
      ...oldElements.slice(0, 4),
      elements[4],
      oldElements[4],
    ]);
  });

  it('should invalidate when node is removed', () => {
    let elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
      invalidateParent: jest.fn(),
    };

    const rootNode = getTreeFixture(container);
    rootNode.parent = container;
    rootNode.render();

    rootNode.removeChild(rootNode.children[1]);

    expect(rootNode.hasChildrenChanged).toBeTruthy();

    const oldElements = [...elements];
    elements = [];
    rootNode.render();

    expect(elements).toEqual([...oldElements.slice(0, 3), oldElements[4]]);
  });

  it('should invalidate children when position is updated', () => {
    let elements = [];
    const container = {
      appendElement(element) {
        elements.push(element);
      },
      invalidateParent: jest.fn(),
    };

    const rootNode = getTreeFixture(container);
    rootNode.parent = container;
    rootNode.render();

    rootNode.props.x += 2;
    rootNode.props.y += 2;

    const oldElements = [...elements];
    elements = [];
    rootNode.render();

    expect(elements).toEqual(
      oldElements.map(e => ({
        ...e,
        parentsOffsetX: e.parentsOffsetX + 2,
        parentsOffsetY: e.parentsOffsetY + 2,
      }))
    );
  });
});
