import App from '../../App';

App.onExit(() => {
  console.log('called onExit listener');
});

App.onError(() => {
  console.log('called onError listener');
});

process.exit(0);
