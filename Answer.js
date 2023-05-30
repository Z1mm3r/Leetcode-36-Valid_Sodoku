var isValidSudoku = function(board) {
    //What do we need to check?
    //3x3 Grid
    //Rows
    //Columns

    //Our checker..
    let isValid = (values) => {
        let check = Array(9).fill(false)

        for(let i = 0; i < values.length; i++){
            //Open Space, dont change anything
            if(values[i] == '.'){
                continue;
            }
            //If we haven't used this number yet, mark that it has been used and continue
            else if (check[values[i] - 1] == false){
                check[values[i] - 1] = true;
            }
            //If we have already used this number, failed
            else{
                return false;
            }
        }
        return true;
    }

    //Grid
    //Use grid coords (0,0) to (3,3) => top left position is (start * 3, start * 3)

    let getGrid = (x,y, board) => {
        let output = []
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                output.push(board[(x*3 + i)][(y * 3 + j)]);
            }
        }
        return output;
    }

    //Another helper, just to keep final code clean
    let getColumn = (colNum, board) =>{
        let output = []
        for (let i = 0; i < 9; i++){
            output.push(board[i][colNum])
        }
        return output;
    }

    //End Helper Functions//

    //Now check
    //Grid
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
           if(!isValid(getGrid(i,j,board))){
               console.log("Failed grid")
               console.log(i,j)
               return false;
           }
        }
    }

    //Rows & columns
    for(let i = 0; i < 9; i++){
        if ((!isValid(getColumn(i, board))) || (!isValid(board[i]))){
            return false;
        }
    }

    return true;
    
};
