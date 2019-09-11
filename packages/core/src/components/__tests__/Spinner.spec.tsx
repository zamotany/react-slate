import React from 'react';
import Spinner from '../Spinner';
import renderToString from '../../renderToString';

describe('Progress component', () => {
  beforeEach(() => {
    process.env.NO_COLOR = '1';
  });
  afterEach(() => {
    process.env.NO_COLOR = undefined;
  });

  it('should render spinner', async () => {
    let index = 0;
    for await (const snapshot of renderToString(<Spinner type="line" />, {
      maxRenders: 5,
    })) {
      switch (index) {
        case 0:
          expect(snapshot).toMatch('-');
          break;
        case 1:
          expect(snapshot).toMatch('\\');
          break;
        case 2:
          expect(snapshot).toMatch('|');
          break;
        case 3:
          expect(snapshot).toMatch('/');
          break;
        case 4:
          expect(snapshot).toMatch('-');
          break;
        default:
          throw new Error('should never get here');
      }
      index++;
    }
  });

  it('should render spinner with custom frames', async () => {
    let index = 0;
    for await (const snapshot of renderToString(
      <Spinner frames={['A', 'B', 'C']} interval={10} />,
      {
        maxRenders: 4,
      }
    )) {
      switch (index) {
        case 0:
          expect(snapshot).toMatch('A');
          break;
        case 1:
          expect(snapshot).toMatch('B');
          break;
        case 2:
          expect(snapshot).toMatch('C');
          break;
        case 3:
          expect(snapshot).toMatch('A');
          break;
        default:
          throw new Error('should never get here');
      }
      index++;
    }
  });

  it('should throw error if interval is missing with custom frames', () => {
    expect(() => {
      renderToString(<Spinner frames={['1', '2']} />);
    }).toThrow('Interval property must be specified when using custom frames');
  });

  it('should throw error if interval is not a non-zero integer', () => {
    expect(() => {
      renderToString(<Spinner interval={-20} />);
    }).toThrow('Interval property must be a number grater than 0');

    expect(() => {
      renderToString(<Spinner interval={NaN} />);
    }).toThrow('Interval property must be a number grater than 0');

    expect(() => {
      renderToString(<Spinner interval={'abc' as any} />);
    }).toThrow('Interval property must be a number grater than 0');
  });
});
