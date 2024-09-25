var King = function(config) {
    this.type = 'king';
    this.constructor(config);
};

King.prototype = new Piece({});

King.prototype.isValidPosition = function(targetPosition) {
   let currentCol = this.position.charAt(0);
   let currentRow = parseInt(this.position.charAt(1));
   
   
   let targetCol = targetPosition.col.charAt(0);
   let targetRow = parseInt(targetPosition.row);
   

   let colDifference = Math.abs(targetCol.charCodeAt(0) - currentCol.charCodeAt(0));
   let rowDifference = Math.abs(targetRow - currentRow);
   
   if ((colDifference === 1 && rowDifference === 0) || 
       (colDifference === 0 && rowDifference === 1) || 
       (colDifference === 1 && rowDifference === 1)) { 
       return true; 
   }
   
   return false;
   
   }


King.prototype.moveTo = function(targetPosition) {
    if (this.isValidPosition(targetPosition)) {
        this.position = targetPosition.col + targetPosition.row;
        this.render();  
    } else {
        console.warn("Move is not valid for king.");
    }
};
