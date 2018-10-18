import App from '../../App';

App.onExit(() => {
  console.log('called onExit listener');
});

App.onError(error => {
  console.log(`called onError listener ${error.message}`);
});

setTimeout(() => {
  throw new Error('TEST_ERROR');
}, 1);
