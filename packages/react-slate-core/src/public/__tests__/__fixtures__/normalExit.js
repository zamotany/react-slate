import App from '../../App';

App.onExit(() => {
  console.log('called onExit Normal listener');
});

App.onExit(() => {
  console.log('called onExit High listener');
}, App.Priority.High);

App.onError(() => {
  console.log('called onError listener');
});
