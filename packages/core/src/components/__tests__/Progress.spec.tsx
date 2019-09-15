import React from 'react';
import Progress from '../Progress';
import View from '../View';
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
    }, 5);
    setTimeout(() => {
      this.setState({ value: 0.99 });
    }, 10);
    setTimeout(() => {
      this.setState({ value: 1 });
    }, 15);
    setTimeout(() => {
      this.setState({ value: 1.1 });
    }, 20);
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

  it('should render only bar', () => {
    expect(
      renderToString(
        <View width={12}>
          <Progress value={0.5} />
        </View>
      ).snapshot
    ).toMatch('[=====>    ]');
  });

  it('should render bar and percentage', async () => {
    let index = 0;
    for await (const snapshot of renderToString(
      <ProgressController>
        {value => (
          <View width={17}>
            <Progress value={value} percentage />
          </View>
        )}
      </ProgressController>,
      {
        maxRenders: 6,
      }
    )) {
      switch (index) {
        case 0:
          break;
        case 1:
          expect(snapshot).toMatch('[>         ]   0%');
          break;
        case 2:
          expect(snapshot).toMatch('[=====>    ]  50%');
          break;
        case 3:
          expect(snapshot).toMatch('[=========>]  99%');
          break;
        case 4:
          expect(snapshot).toMatch('[==========] 100%');
          break;
        case 5:
          expect(snapshot).toMatch('[==========] 100%');
          break;
        default:
          throw new Error('should never get here');
      }
      index++;
    }
  });
});
