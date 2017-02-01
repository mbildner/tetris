;(function (global, document) {
  'use strict';

  function flatten (nestedArr) {
    return nestedArr.reduce(function (flatArr, arr) {
      return flatArr.concat(arr);
    });
  }

  function randomFromArr (arr) {
    var max = arr.length - 1;
    var randIndex = Math.round(Math.random() * max);
    return arr[randIndex];
  }

  function pieceFactory (shape, color) {
    var line = {};
    var block = {};
    var s = {};
    var z = {};
    var l = {};
    var j = {};
    var t = {};

    line.color = "orange";
    line.rotations = [
      [
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 1]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
      ],
    ];

    block.color = "red";
    block.rotations = [
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]
    ];

    s.color = "blue";
    s.rotations = [
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0]
      ]
    ];

    z.color = "green";
    z.rotations = [
      [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ]

    ];

    l.color = "purple";
    l.rotations = [
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]
      ]

    ];

    j.color = "lightblue";
    j.rotations = [
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
      ],
      [
        [0, 1, 1, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ]
    ];


    t.color = "orange";
    t.rotations = [
      [
        [0, 0, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ],
      [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0]
      ]
    ];

    var pieces = {
      line: line,
      block: block,
      s: s,
      z: z,
      l: l,
      j: j,
      t: t
    };

    var piece = pieces[shape];
    piece.shape = shape;

    piece.currentRotation = 0;

    piece.rotate = function () {
      this.currentRotation = (this.currentRotation + 1) % 4;
      return this.currentRotation;
    };

    function clonePiece (piece) {
      var dummyPiece = pieceFactory(this.shape);
      dummyPiece.coords = this.coords;
      dummyPiece.currentRotation = this.currentRotation;
      return dummyPiece;
    }


    piece.clone = function () {
      var dummyPiece = pieceFactory(this.shape);
      dummyPiece.coords = this.coords;
      dummyPiece.currentRotation = this.currentRotation;
      return dummyPiece;
    }

    piece.getRotations = function (times) {
      var dummyPiece = this.clone();

      if (times >= 0) {
        while (times--) {
          dummyPiece.rotate();
        }
      }

      return dummyPiece;
    };

    piece.getSingleRotation = function () {
      return this.getRotations(1);
    };

    piece.getGrid = function () {
      return this.rotations[this.currentRotation];
    };

    piece.getOccuppied = function () {
      var corner = this.coords;
      var grid = this.getGrid();

      var nestedObjectGrid = grid.map(function (row, rowOffset) {
        return row.map(function (box, colOffset) {
          return {
            isOccuppied: box,
            row: corner.row + rowOffset,
            col: corner.col + colOffset
          };
        });
      });

      var objectArr = flatten(nestedObjectGrid);

      var occuppiedObjectArr = objectArr.filter(function (square) {
        return square.isOccuppied;
      });

      return occuppiedObjectArr;

    };

    piece.coords = {
      row: 0,
      col: 0
    };

    piece.lower = function () {
      this.coords.row += 1;
      return this.coords.row;
    };

    piece.shift = function (direction) {
      this.coords.col += direction;
      return this.coords.col;
    };

    return piece;
  }

  pieceFactory.allShapes = ['line', 'block', 's', 'z', 'j', 'l', 't'];

  function gameModelFactory (boardConfig) {
    var board = {};

    board.rows = boardConfig.rows;
    board.cols = boardConfig.cols;

    var model = boardModelFactory(boardConfig.rows, boardConfig.cols, boardConfig.squareModelFactory);

    board.getUpcomingPiecesQueue = getUpcomingPiecesQueue;

    board.getCurrentPiece = getCurrentPiece;
    board.getNextPiece = getNextPiece;
    board.getRandomPiece = getRandomPiece;
    board.getPiece = getPiece;

    board.getFullRows = getFullRows;
    board.clearRow = clearRow;
    board.replaceRow = replaceRow;

    board.freezePiece = freezePiece;
    board.getGrid = getGrid;
    board.getSquare = getSquare;
    board.getRow = getRow;
    board.getCol = getCol;
    board.pieceCanMove = pieceCanMove;
    board.pieceCanRotate = pieceCanRotate;
    var clearedIndices = [];
    board.getClearedRows = function(){
      return clearedIndices;
    }

    var upcomingPiecesQueue = [];

    function getUpcomingPiecesQueue () {
      // includes current piece, slice in the future
      return upcomingPiecesQueue;
    }

    function getNextPiece () {
      return upcomingPiecesQueue[upcomingPiecesQueue.length -2];
    }

    function getCurrentPiece () {
      while (upcomingPiecesQueue.length <= (boardConfig.upcomingPiecesShown || 1)) {
        upcomingPiecesQueue.unshift(getRandomPiece());
      }

      return upcomingPiecesQueue[upcomingPiecesQueue.length - 1];
    }

    function clearRow (rowIndx) {
      clearedIndices.push(rowIndx)
      var fullRow = model.splice(rowIndx, 1)[0];

      return fullRow.map(function (square) {
        square.isOccuppied = false;
        square.color = 'grey';
        return square;
      });

      return fullRow;
    }

    function replaceRow (row) {
      model.unshift(row);
    }

    function getFullRows () {
      var fullRowsIndxArr = [];

      model.forEach(function (row, rowIndx) {
        if (row.every(function (square) { return square.isOccuppied; })) {
          fullRowsIndxArr.push(rowIndx);
        }
      });

      return fullRowsIndxArr;
    }

    function getRandomPiece () {
      var randomShape = randomFromArr(boardConfig.gamePieceFactory.allShapes);
      return getPiece(randomShape);
    }

    function getPiece (shape) {
      return boardConfig.gamePieceFactory(shape);
    }

    function freezePiece (piece) {
      piece.getOccuppied().forEach(function (square) {
        var gameBoardSquare = board.getSquare(square.row, square.col);
        gameBoardSquare.isOccuppied = true;
        gameBoardSquare.color = piece.color;
      });

      upcomingPiecesQueue.pop();
    }

    function pieceWouldCollide (piece, rowOffset, colOffset) {
      var wouldCollide = piece.getOccuppied().some(function (pieceSquare) {
        var gridSquare = getSquare(pieceSquare.row + rowOffset, pieceSquare.col + colOffset);
        return gridSquare && gridSquare.isOccuppied;
      });

      return wouldCollide;
    }

    function isOffBoard (piece, rowOffset, colOffset) {
      var offBoard = piece.getOccuppied().some(function (pieceSquare) {
        return !getSquare(pieceSquare.row + rowOffset, pieceSquare.col + colOffset);
      });

      return offBoard;
    }

    function pieceCanRotate (piece) {
      var safeToRotate = pieceCanMove(piece.getSingleRotation(), 0, 0);
      return safeToRotate;
    }

    function pieceCanMove (piece, row, col) {
      var wouldCollide = pieceWouldCollide(piece, row, col);
      var wouldBeOffBoard = isOffBoard(piece, row, col);

      return (!wouldCollide && !wouldBeOffBoard);
    }

    function getGrid () {
      return model;
    }

    function getCol (col) {
      return model.map(function (row) {
        return row[col];
      });
    }

    function getRow (row) {
      return model[row];
    }

    function getSquare (row, col) {
      if (row >= boardConfig.rows || col >= boardConfig.cols) {
        return undefined
      }
      else {
        return model[row][col];
      }
    }

    function boardModelFactory (rows, cols, squareModelFactory) {
      squareModelFactory = (squareModelFactory || function () {return {}});

      var model = [];
      for (var r=0; r<rows; r++) {
        var row = [];
        for (var c=0; c<cols; c++) {
          var square = squareModelFactory(r, c);
          row.push(square);
        }
        model.push(row);
      }

      return model;
    }

    return board;
  }

  function squareModelFactory (row, col) {
    return {
      isOccuppied: false,
      color: 'grey'
    };
  }

  function gameControllerFactory (controllerConfig) {
    var controller = {};

    controller.start = start;
    controller.handleExternalCommand = handleExternalCommand;

    var cyclesBlocked = 0;

    var keyCodeDict = {
      '37': 'left',
      '38': 'up',
      '39': 'right',
      '40': 'down',
      '32': 'space'
    };

    var actionsDict = {
      'left': moveLeft,
      'up': rotatePiece,
      'right': moveRight,
      'down': moveDown,
      'space': hardDrop
    };

    controller.ACTIONS = Object.keys(actionsDict).reduce(function(memo, key){
      return memo[key] = key, memo;
    }, {});

    controller.attachKeyboardInput = attachKeyboardInput;

    function attachKeyboardInput(){
      if (!global.document){
        throw new Error('cannot attach keyboard listeners without a DOM document')
      }

      global.document.body.addEventListener('keydown', handleKeyDown);
    }

    var gameInterval = null;

    function runRender () {
      if (!controllerConfig.view) {
        // bail, there are no attached views
        return
      }


      controllerConfig.view.wipeScreen();
      controllerConfig.view.renderBoard();
      controllerConfig.view.renderPiece(controllerConfig.model.getCurrentPiece());

      global.requestAnimationFrame(runRender);
    }

    function isGameOver (){
      return (cyclesBlocked >= controllerConfig.freezePieceAfter) &&
        controllerConfig.model.getCurrentPiece().coords.row == 0;
    }

    function endGameIfOver(){
      if (!isGameOver()) return

      global.clearInterval(gameInterval)
      console.log('game is over')
    }


    function start () {
      runRender();

      // this logic should be moved to gameModel
      gameInterval = global.setInterval(function () {

        if (controllerConfig.manualMoveOnly) {
          if (!canMoveDown()){
            cyclesBlocked += 1;
          }
        }
        else {
          if (!moveDown()) {
            cyclesBlocked += 1;
          }
        }

        endGameIfOver();

        if (cyclesBlocked >= controllerConfig.freezePieceAfter) {
          controllerConfig.model.freezePiece(controllerConfig.model.getCurrentPiece());
          cyclesBlocked = 0;

          var fullRows = controllerConfig.model.getFullRows();

          fullRows.forEach(function (rowIndx) {
            var replacementRow = controllerConfig.model.clearRow(rowIndx);
            controllerConfig.model.replaceRow(replacementRow);
          });
        }

      }, 250);

    }

    function noop(){}

    function onActionTaken(){
      (controllerConfig.onActionTaken || noop)(controllerConfig.model.getGrid(), controllerConfig.model.getClearedRows())
    }

    function handleExternalCommand (action) {
      if (actionsDict[action]) {
        actionsDict[action].call(controller);
      }
    }

    function handleKeyDown (key) {
      if (keyCodeDict[key.keyCode]) {
        key.preventDefault();
        var action = keyCodeDict[key.keyCode];
        handleExternalCommand(action);
      }
    }

    function moveLeft () {
      if (controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 0, -1)) {
        controllerConfig.model.getCurrentPiece().shift(-1);
      }
      onActionTaken();
    }

    function moveRight () {
      if (controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 0, 1)) {
        controllerConfig.model.getCurrentPiece().shift(1);
      }
      onActionTaken();
    }

    function rotatePiece () {
      if (controllerConfig.model.pieceCanRotate(controllerConfig.model.getCurrentPiece())) {
        controllerConfig.model.getCurrentPiece().rotate();
      }
      onActionTaken();
    }

    function canMoveDown(){
      return controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 1, 0);
    }

    function moveDown () {
      var ableToMove = canMoveDown();

      if (ableToMove) {
        controllerConfig.model.getCurrentPiece().lower();
      }

      onActionTaken();
      return ableToMove;
    }

    function hardDrop () {
      while (true) {
        var wasBlocked = !moveDown();

        if (wasBlocked) {
          cyclesBlocked++;
          break;
        }
      }

      endGameIfOver();

      controllerConfig.model.freezePiece(controllerConfig.model.getCurrentPiece());
      cyclesBlocked = 0;

      var fullRows = controllerConfig.model.getFullRows();

      fullRows.forEach(function (rowIndx) {
        var replacementRow = controllerConfig.model.clearRow(rowIndx);
        controllerConfig.model.replaceRow(replacementRow);
      });
    }

    return controller;

  }

  var tetris = {};

  tetris.gameModelFactory = gameModelFactory;
  tetris.gameControllerFactory = gameControllerFactory;
  tetris.squareModelFactory = squareModelFactory;
  tetris.pieceFactory = pieceFactory;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = tetris;
  } else {
    console.log('exporting on global')
    global['tetris'] = tetris;
  }

})(typeof window !== 'undefined' ? window : global);

