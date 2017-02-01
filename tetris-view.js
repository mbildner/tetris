;(function (global) {
  'use strict';
  global.viewFactory = viewFactory;

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

    view.renderBoard = renderBoard;
    view.renderRow = renderRow;
    view.renderCol = renderCol;
    view.renderPiece = renderPiece;
    view.wipeScreen = wipeScreen;

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

})(window || global, document);
