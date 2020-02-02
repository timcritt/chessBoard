
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

class Square {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.fillStyle = 'black';
  }
  draw () {
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var board = {
  rows: 8,
  columns: 8,
  squares: [],
  width: ctx.canvas.width,
  height: ctx.canvas.height,
  indent: false,
  createSquares () {
    const squareSide = this.width / this.columns;
    var squarePosX = 0, squarePosY = 0, indent = false;
    var i = 0, j =0;

    for (i =0; i<this.rows; i++) {
      for (j=0; j<this.columns/2; j++) {
        this.squares.push(new Square(squareSide, squareSide, squarePosX, squarePosY));
        squarePosX += 2*squareSide;
      }
      //set new row height
      squarePosY += squareSide;
      //adds an indent every other row
      indent = !indent;
      indent ? squarePosX = squareSide : squarePosX = 0;
    }
  },
  drawSquares() {
    this.squares.forEach( square => {
      square.draw();
    })
  }
}

board.createSquares();
board.drawSquares();

