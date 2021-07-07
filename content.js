const App = {
  init: () => {
    console.log('init', $('body'));
  },
}

$(() => {
  App.init();
});