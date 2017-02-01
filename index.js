'use strict';

const express = require('express')
var bodyParser = require('body-parser')

const tetris = require('./public/tetris-app.js');
const gameModel = tetris.gameModelFactory({
  rows: 20,
  cols: 10,
  squareModelFactory: tetris.squareModelFactory,
  gamePieceFactory: tetris.pieceFactory
});

var gameState = null;

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

controller.start();

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/state', function (req, res) {
  res.send(JSON.stringify(gameState))
})

app.post('/action', function(req, res) {
  controller.handleExternalCommand(req.body.action)

  res.send(JSON.stringify(gameState))
})


app.listen(3000, function () {
  console.log('tetris app ready to serve');
})

