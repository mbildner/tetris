'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const basicAuth = require('basic-auth')

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

if (!USERNAME || !PASSWORD) {
  console.log('you must provide a username and password for this app to start');
  process.exit(1)
}

const auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.send(401);
  };

  var user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };

  if (user.name === USERNAME && user.pass === PASSWORD) {
    return next();
  } else {
    return unauthorized(res);
  };
};

const tetris = require('./public/tetris-app.js');

function newGame(){
  const gameModel = tetris.gameModelFactory({
    rows: 20,
    cols: 10,
    squareModelFactory: tetris.squareModelFactory,
    gamePieceFactory: tetris.pieceFactory
  });


  const controller = tetris.gameControllerFactory({
    model: gameModel,
    freezePieceAfter: 2,
    manualMoveOnly: true,
    onActionTaken: function(gameBoard, currentPiece, clearedRows){
      gameState = {
        board: gameBoard,
        piece: currentPiece,
        clearedRows: clearedRows
      };
    }
  });

  return controller
}

const app = express()

let gameState = null;
let controller = newGame();
controller.start();

app.use(auth)
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/state', function (req, res) {
  res.send(JSON.stringify(gameState))
})

app.post('/restart', function(req, res){
  gameState = null;
  controller = newGame();
  controller.start();
  res.send('game restarted')
})

app.post('/action', function(req, res) {
  controller.handleExternalCommand(req.body.action)

  res.send(JSON.stringify(gameState))
})


app.listen(3000, function () {
  console.log('tetris app ready to serve');
})

