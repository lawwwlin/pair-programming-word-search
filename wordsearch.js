const transpose = function(matrix) {
  const returnMatrix = [];
  for (let row = 0; row < matrix[0].length; row++) {
    returnMatrix.push([]);
  }
  for (let row = 0; row < matrix.length; row++) { // access row
    for (let col = 0; col < matrix[row].length; col++) { // access ele of row (col)
      returnMatrix[col].push(matrix[row][col]); // [e1, e2]
    }
  }
  return returnMatrix;
};

const checkMatrix = (matrix, word) => {
  for (const row of matrix) {
    if (row.includes(word)) {
      return true
    }
  }
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const rHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
  const rVerticalJoin = transposed.map(ls => ls.reverse().join(''));
  if (checkMatrix(horizontalJoin, word)) return true;
  if (checkMatrix(verticalJoin, word)) return true;
  if (checkMatrix(rHorizontalJoin, word)) return true;
  if (checkMatrix(rVerticalJoin, word)) return true;
  return false;
};

module.exports = wordSearch