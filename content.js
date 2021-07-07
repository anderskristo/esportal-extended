const App = {
  init: () => {
    const location = window.location.href;
    console.log(location);
    var res = location.split('/');
    var pos = res.indexOf('match');

    if (res.indexOf('match')) {
      App.awaitingGame(res[pos+1]);
    }
  },
  awaitingGame: (matchId) => {
    // When waiting game, a regular matchid is created... so here we can do magic.
    // Get all players... get recent games... count win streak... or whatever..
    console.log(matchId);
  },
}

$(() => {
  App.init();
});