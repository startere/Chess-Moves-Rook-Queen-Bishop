# Chess-Moves-Rook-Queen-Bishop
A JS system that checks whether the moves of chess pieces are valid

You are given a chess board with size RxC (R rows and C columns). Each square (cell) of the chessboard is identified by a unique coordinate pair - a letter and a number. The vertical columns of squares from left to right are labeled a, b, c and so on. The horizontal rows of squares are numbered 1, 2, 3 and so on, starting from bottom to top. Thus each square has a unique identification of letter followed by number.

Example of board with size 5x8 is given in the picture.

Moves are given by two square (cell) identifications separated by a single space. Examples: “a1 e3”, “d1 f2”, “h5 h1”, “a1 z9”, etc. All given moves will be in this format and in the range of the board.

Also you are given 3 types of chess pieces: rook, bishop and queen as explained bellow.

The rook moves any number of vacant (empty) squares forwards, backwards, left, or right in a straight line.
The bishop moves any number of vacant (empty) squares diagonally in a straight line.
The queen moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.
Pieces do not capture other pieces. Move is valid if the figure will be placed on an empty cell.

Input

On the first line there will be the number R (number of rows). On the second line there will be the number C (number of columns). On each of the next R lines there will be C characters representing one cell (square) of the board. Empty cell are denoted with dash (‘-‘), Rooks with `R`, Bishops with `B` and Queens with `Q`. See examples for clarification.
On the next line there will be the number T representing the number of moves to be checked for validity. At each of the next T lines there will be a move. All moves will be in the range of the board.
The input data will always be valid and in the format described. There is no need to check it explicitly.

Output

For each of the given moves output either ‘yes’ or ‘no’ whether the move is valid or not. Invalid moves are those which are not possible because of the given restrictions. See examples for clarification.

Sample solution code (in JavaScript) 

  function solve(params) {
    var rows = parseInt(params[0]), 
        cols = parseInt(params[1]), 
        tests = parseInt(params[rows + 2]), 
        i, 
        move; 
        
    for (i = 0; i < tests; i++) {
      move = params[rows + 3 + i]; 
      // Your solution here 
      console.log('yes'); 
      // or 
      console.log('no'); 
      }
    }

Constraints

 R will be between 1 and 9, inclusive.

 C will be between 1 and 26, inclusive.

 T will be between 5 and 12, inclusive.

 The board will contain only ‘-‘, ‘R’, ‘B’ or ‘Q’ characters

 The list of moves will contain only strings with 5 characters in the format described above.

 Some of the test cases are designed to test only specific invalid move types, so partial solutions may also earn points

 Allowed working time for your program: 0.25 seconds. Allowed memory: 32 MB.
