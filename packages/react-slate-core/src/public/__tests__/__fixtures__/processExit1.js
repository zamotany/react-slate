import App from '../../App';

App.onExit(() => {
  console.log('called onExit listener');
});

App.onError(() => {
  console.log(`called onError listener ${App.exitCode}`);
});

process.exit(1);
