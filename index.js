'use strict';

const tetris = require('./tetris-app.js');

console.log(
  Object.keys(tetris)
)

const gameModel = tetris.gameModelFactory({
  rows: 20,
  cols: 10,
  squareModelFactory: tetris.squareModelFactory,
  gamePieceFactory: tetris.pieceFactory
});

const controller = tetris.gameControllerFactory({
  model: gameModel,
  freezePieceAfter: 2,
  manualMoveOnly: false,
  onActionTaken: function(gameBoard, clearedRows){
    console.log("cleared: " + clearedRows.length + " rows");
    console.log(gameBoard)
  }
});

controller.start();

setInterval(function(){
  controller.handleExternalCommand('left')
}, 1000)
