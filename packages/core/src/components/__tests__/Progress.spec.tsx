import React from 'react';
import Progress from '../Progress';
import renderToString from '../../renderToString';

class ProgressController extends React.Component<
  { children: (value: number) => JSX.Element },
  { value: number }
> {
  state = {
    value: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 0.5 });
    }, 0);
    setTimeout(() => {
      this.setState({ value: 0.99 });
    }, 5);
    setTimeout(() => {
      this.setState({ value: 1 });
    }, 10);
    setTimeout(() => {
      this.setState({ value: 1.1 });
    }, 15);
  }

  render() {
    return this.props.children(this.state.value);
  }
}

describe('Progress component', () => {
  beforeEach(() => {
    process.env.NO_COLOR = '1';
  });
  afterEach(() => {
    process.env.NO_COLOR = undefined;
  });

  it('should not render bar if width was not provided', () => {
    expect(
      renderToString(<Progress value={0.5} percentage />).snapshot
    ).toMatch(' 50%');
  });

  it('should render only bar', () => {
    expect(
      renderToString(<Progress value={0.5} width={10} />).snapshot
    ).toMatch('[=====>    ]');
  });

  it('should render bar and percentage', async () => {
    let index = 0;
    for await (const snapshot of renderToString(
      <ProgressController>
        {value => <Progress value={value} width={10} percentage />}
      </ProgressController>,
      {
        maxRenders: 5,
      }
    )) {
      switch (index) {
        case 0:
          expect(snapshot).toMatch('[>         ]   0%');
          break;
        case 1:
          expect(snapshot).toMatch('[=====>    ]  50%');
          break;
        case 2:
          expect(snapshot).toMatch('[=========>]  99%');
          break;
        case 3:
          expect(snapshot).toMatch('[==========] 100%');
          break;
        case 4:
          expect(snapshot).toMatch('[==========] 100%');
          break;
        default:
          throw new Error('should never get here');
      }
      index++;
    }
  });
});
