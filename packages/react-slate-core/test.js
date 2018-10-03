const App = require('./build/public/App').default;

App.onExit(() => {
  console.log(' onExit');
});

App.onError(e => {
  console.log(' onError', e);
});

// setInterval(() => {}, 100);

// // setTimeout(() => {
// throw new Error('123');
// // }, 1000);

App.exit(1);
