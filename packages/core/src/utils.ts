export function capitalize(text: string) {
  return text
    .split(' ')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

export class AsyncIterator<D> {
  private awaitingData: D[] = [];
  private awaitingResolver?: (value: D) => void;
  private iteration: number = 0;

  constructor(private maxIterations?: number) {}

  nextValue(value: D) {
    if (this.awaitingResolver) {
      this.awaitingResolver(value);
      this.awaitingResolver = undefined;
    } else {
      this.awaitingData.push(value);
    }
  }

  makeIterator<T>(target: T): T & Iterable<Promise<D | undefined>> {
    const self = this;
    return Object.assign(target, {
      [Symbol.iterator]() {
        return {
          next: () => {
            if (
              self.maxIterations &&
              self.iteration >= self.maxIterations - 1
            ) {
              return {
                done: true,
                value: Promise.resolve(undefined),
              };
            } else {
              self.iteration++;
            }

            let value: Promise<D>;

            if (self.awaitingResolver) {
              throw new Error(
                'Cannot call next on iterator, if previous promise has not yet resolved'
              );
            }

            if (self.awaitingData.length) {
              value = Promise.resolve(self.awaitingData.shift()!);
            } else {
              value = new Promise(resolve => {
                self.awaitingResolver = resolve;
              });
            }

            return {
              done: false,
              value,
            };
          },
        };
      },
    });
  }
}
