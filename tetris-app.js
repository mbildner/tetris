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

function viewFactory (viewConfig) {
  var view = {};

  var canvas = viewConfig.canvas;
  var context = canvas.getContext('2d');

  var height = canvas.height;

  // leave room for the upcoming pieces view
  var width = canvas.width - 200;

  var rowsNumber = viewConfig.model.rows;

  var colsNumber = viewConfig.model.cols;

  var rowHeight = height / rowsNumber;
  var colWidth = width / colsNumber;

  view.renderUpcomingQueue = renderUpcomingQueue;

  view.renderBoard = renderBoard;
  view.renderRow = renderRow;
  view.renderCol = renderCol;
  view.renderPiece = renderPiece;
  view.wipeScreen = wipeScreen;

  function renderUpcomingQueue (queue) {
    // var safeClones = queue.map(function (piece) {
    //  return piece.clone();
    // });

    // safeClones.forEach(function (clone, indx) {
    //  clone.coords.row = (indx + 1) * 4;

    //  console.log(clone.color);



    // });

  }

  function wipeScreen (color) {
    var cachedFillStyle = context.fillStyle;
    color = color || 'grey';
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
    context.fillStyle = cachedFillStyle;

  }

  function paintSquare (row, col, color) {
    var cachedFillStyle = context.fillStyle;
    context.fillStyle = color;
    context.fillRect(col*colWidth, row*rowHeight, colWidth, rowHeight);
    context.fillStyle = cachedFillStyle;
  }

  function renderBoard () {
    viewConfig.model.getGrid().forEach(function (row, rowIndx) {
      row.forEach(function (square, colIndx) {
        paintSquare(rowIndx, colIndx, square.color);
      });
    });
  }

  function renderRow (rowIndx) {
    var rowPieces = viewConfig.model.getRow(rowIndx);
    rowPieces.forEach(function (box, colIndx) {
      paintSquare(rowIndx, colIndx, box.color);
    });
  }

  function renderCol (colIndx) {
    var colPieces = viewConfig.model.getCol(colIndx);
    colPieces.forEach(function (box, rowIndx) {// correct, checking the row of each square in column
      paintSquare(rowIndx, colIndx, box.color);
    });
  }

  function renderPiece (piece) {
    var row = piece.coords.row;
    var col = piece.coords.col;
    var grid = piece.getGrid();

    grid.forEach(function (pieceRow, rowOffset) {
      pieceRow.forEach(function (boxPresent, colOffset) {
        if (boxPresent) {
          paintSquare(row+rowOffset, col+colOffset, piece.color);
        }
      });
    });
  }

  return view;
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

  var cyclesBlocked = 0;

  function runRender () {
    controllerConfig.view.wipeScreen();
    controllerConfig.view.renderBoard();
    controllerConfig.view.renderPiece(controllerConfig.model.getCurrentPiece());

    controllerConfig.view.renderUpcomingQueue(controllerConfig.model.getUpcomingPiecesQueue());

    window.requestAnimationFrame(runRender);
  }

  function start () {
    document.body.addEventListener('keydown', handleKeyDown);
    runRender();

    // this logic should be moved to gameModel
    window.setInterval(function () {
      if (!moveDown()) {
        cyclesBlocked += 1;
      }
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

  function handleKeyDown (key) {
    if (keyCodeDict[key.keyCode]) {
      key.preventDefault();
      // is binding to the controller necessary?
      actionsDict[keyCodeDict[key.keyCode]].call(controller);
    }
  }

  function moveLeft () {
    if (controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 0, -1)) {
      controllerConfig.model.getCurrentPiece().shift(-1);
    }
  }

  function moveRight () {
    if (controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 0, 1)) {
      controllerConfig.model.getCurrentPiece().shift(1);
    }
  }

  function rotatePiece () {
    if (controllerConfig.model.pieceCanRotate(controllerConfig.model.getCurrentPiece())) {
      controllerConfig.model.getCurrentPiece().rotate();
    }
  }

  function moveDown () {
    var ableToMove = controllerConfig.model.pieceCanMove(controllerConfig.model.getCurrentPiece(), 1, 0);

    if (ableToMove) {
      controllerConfig.model.getCurrentPiece().lower();
    }

    return ableToMove;
  }

  function hardDrop () {
    while (moveDown()) {
      // drop until can't
    }

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

var canvas = document.getElementById('game-board');
var nextPieceCanvas = document.getElementById('next-piece-canvas');

var gameModel = gameModelFactory({
  rows: 20,
  cols: 10,
  // nextPieceQueue: 4,
  squareModelFactory: squareModelFactory,
  gamePieceFactory: pieceFactory
});

var gameView = viewFactory({
  canvas: canvas,
  model: gameModel
});

var controller = gameControllerFactory({
  view: gameView,
  model: gameModel,
  freezePieceAfter: 2
});

controller.start();