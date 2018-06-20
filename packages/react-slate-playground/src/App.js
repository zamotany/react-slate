import React from 'react';
import { View } from '@react-slate/core';
import {
  Spinner,
  ProgressBar,
  KeyPress,
  ScrollView,
} from '@react-slate/components';

const components = ['Spinner', 'ProgressBar'];

export default class App extends React.Component {
  state = {
    componentPreview: 0,
    progress: 0,
    isMoving: false,
    previewLeftOffset: 0,
    previewTopOffset: 0,
    scrollDisabled: false,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(state => ({
        progress:
          state.progress >= 1 ||
          state.componentPreview !== components.indexOf('ProgressBar')
            ? 0
            : state.progress + 0.1,
      }));
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  onPress = ({ char }) => {
    if (char === 'x') {
      this.setState(({ scrollDisabled }) => ({
        scrollDisabled: !scrollDisabled,
      }));
    }

    if (!this.state.isMoving && char === 'w') {
      this.setState(state => ({
        componentPreview: Math.max(0, state.componentPreview - 1),
      }));
    } else if (!this.state.isMoving && char === 's') {
      this.setState(state => ({
        componentPreview: Math.min(
          components.length - 1,
          state.componentPreview + 1
        ),
      }));
    } else if (char === 'm') {
      this.setState(state => ({ isMoving: !state.isMoving }));
    } else if (this.state.isMoving) {
      let dx = 0;
      let dy = 0;
      switch (char) {
        case 'w':
          dy -= 1;
          break;
        case 'a':
          dx -= 1;
          break;
        case 's':
          dy += 1;
          break;
        case 'd':
          dx += 1;
          break;
        default:
      }
      this.setState(state => ({
        previewLeftOffset: state.previewLeftOffset + dx,
        previewTopOffset: state.previewTopOffset + dy,
      }));
    }
  };

  renderPreview(componentIndex) {
    switch (components[componentIndex]) {
      case 'Spinner':
        return (
          <View>
            <Spinner
              style={[
                styles.spinner,
                {
                  color: 'red',
                },
              ]}
            />
            <Spinner style={styles.spinner} type="line" />
            <Spinner type="dots11" />
          </View>
        );
      case 'ProgressBar':
        return <ProgressBar barWidth={16} value={this.state.progress} />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.intro}>react-slate playground</View>
        <View style={styles.menu}>
          <View style={{ ...styles.menuInfo, marginBottom: 0 }}>
            {'(use "w" and "s" to navigate)'}
          </View>
          <View style={styles.menuInfo}>
            {'(press "m" to move preview using "w", "a", "s", "d")'}
          </View>
          {components.map((name, index) => (
            <View
              key={name}
              style={{
                ...styles.menuItem,
                ...(index === this.state.componentPreview &&
                  styles.menuItemActive),
              }}
            >
              {name}
            </View>
          ))}
        </View>
        <View
          style={{
            ...styles.componentPreview,
            left: 30 + this.state.previewLeftOffset,
            top: 5 + this.state.previewTopOffset,
            borderColor: this.state.isMoving ? 'ansi-magenta' : 'ansi-white',
          }}
        >
          <View style={styles.componentPreviewLabel}>Preview:</View>
          {this.renderPreview(this.state.componentPreview)}
        </View>
        <ScrollView
          height={1}
          disabled={this.state.scrollDisabled}
          style={{ border: 'solid red' }}
        >
          <View>{'Scroll!'}</View>
          <View>{'... yeah ...'}</View>
          <View>{'... you are ...'}</View>
          <View>{'... scrolling ...'}</View>
          <View>{'... awesome, right?'}</View>
        </ScrollView>
        <View>{`Press "x" to ${
          this.state.scrollDisabled ? 'enable' : 'disable'
        } scroll`}</View>
        <KeyPress stream={process.stdin} onPress={this.onPress} />
      </View>
    );
  }
}

const styles = {
  appContainer: {
    marginLeft: 2,
  },
  intro: {
    color: 'ansi-green',
    margin: '0 0 1 0',
  },
  menu: {
    marginBottom: 1,
  },
  menuInfo: {
    marginBottom: 1,
    color: 'ansi-gray',
  },
  menuItem: {
    width: 13,
    paddingLeft: 1,
  },
  menuItemActive: {
    backgroundColor: 'ansi-blue',
  },
  componentPreview: {
    borderStyle: 'solid',
    width: 20,
    height: 6,
    position: 'fixed',
    textAlign: 'center',
  },
  componentPreviewLabel: {
    marginBottom: 1,
  },
  spinner: {
    marginRight: 1,
  },
};
