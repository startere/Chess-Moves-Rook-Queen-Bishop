function solve(params)
{
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        i,
        move, 
        parsedrow,
        origin,
        destination,
        originpos,
        destinpos;
   
    var board = [],
        originarr = [],
        destinarr = [];
   
    for(var row = 0; row < rows; row++)
        {
            parsedrow = params[2 + row];
            board[row] = parsedrow;
        }

    for (i = 0; i < tests; i++)
        {
            move = params[rows + 3 + i];
            origin = move.split(" ")[0];
            destination = move.split(" ")[1];
            originarr = [origin.charCodeAt(0) - 97, 
                        rows - origin[1]];
            destinarr = [destination.charCodeAt(0) - 97,
                        rows - destination[1]];
            originpos = board[originarr[1]][originarr[0]];
            destinpos = board[destinarr[1]][destinarr[0]];
            var changerow = originarr[1] !==  destinarr[1];
            var changecol = originarr[0] !==  destinarr[0];
            var deltarow = destinarr[1] - originarr[1];
            var deltacol = destinarr[0] - originarr[0];
            var validmove = true; 
            
            if(originpos === '-' || destinpos !== '-')
                {
                    validmove = false;
                }
            
            else if(originpos == 'R')
                {
                    if(changerow && changecol)
                        {
                            validmove = false;
                        }
                }
            else if(originpos == 'B')
                {
                    if(
                       (changerow && !changecol)
                       ||
                       (!changerow && changecol)
                       ||
                       (Math.abs(deltarow) !== Math.abs(deltacol))
                      )
                        {
                            validmove = false;
                        }
                } 
            else if(originpos == 'Q')
                {
                    if(
                        (changerow && changecol)
                        &&
                        (Math.abs(deltarow) !== Math.abs(deltacol))
                      )
                        {
                            
                            validmove = false;
                        }
                } 
            
             if (validmove == true)
                {
                  var row = originarr[1];
                  var col = originarr[0]; 
                  while(!(row == destinarr[1] && col == destinarr[0]))
                      {
                       if(row !== destinarr[1]) 
                           {row = row + deltarow/Math.abs(deltarow)}
                          
                       if(col !== destinarr[0]) 
                           {col = col + deltacol/Math.abs(deltacol)}
                        if(board[row][col] !== '-') 
                            {
                              if(!(row == originarr[1] 
                                 && col == originarr[0]))
                                  {
                                      validmove = false;
                                  }
                            }
                      }
                  }

            if(validmove == true)
                {
                    console.log('yes');
                }
            else
                {
                    console.log('no');
                }
        }
   
}
