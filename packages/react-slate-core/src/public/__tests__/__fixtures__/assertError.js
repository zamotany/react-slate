import App from '../../App';

App.onExit(() => {
  console.log('called onExit listener');
});

App.onError(error => {
  console.log(`called onError listener ${error.message}`);
});

console.assert(false, 'TEST');
