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
      return true;
    }
  }
  return false;
};

const traverse = (row, col, matrix, word) => {
  const firstLetter = word.charAt(0);
  const height = matrix.length;
  const width = matrix[row].length;
  const diagonal = width - row;
  const array = [[]];
  if (row >= height || col >= width || word.length > diagonal) {
    return array;
  }
  if (firstLetter === matrix[row][col]) { // if first letter matches, 
    console.log(`diagonalChecking ${matrix} starting [${row}][${col}], for ${word}`)
    array.push(diagonalCheck(row, col, matrix, word, []));
  } else { // first letter doesn't match, look for match
    if (col === width - 1) {
      console.log("traverse recusion" + row+1 + " " + col+1 + " , to next row: " + row+1 + " " + col)
      traverse(row + 1, 0, matrix, word);
    } else {
      console.log("traverse recusion" + row+1 + " " + col+1 + " , to next row: " + row + " " + col+1)
      traverse(row, col + 1, matrix, word);
    }
  }
  if (col === width - 1) {
    console.log("traverse recusion" + row+1 + " " + col+1 + " , to next row: " + row+1 + " " + col)
    traverse(row + 1, 0, matrix, word);
  } else {
    console.log("traverse recusion" + row+1 + " " + col+1 + " , to next row: " + row + " " + col+1)
    traverse(row, col + 1, matrix, word);
  }
  return array;
};

const diagonalCheck = (row, col, matrix, word, arr) => {
  if (matrix[row][col]) { // element exists
    if (word.charAt(0) === matrix[row][col] && word.length === 1) {
      // console.log(`diagonal check base case, [row][col] ${row}${col}, matrix: ${matrix[row][col]}, word: ${word}`);
      arr.push(word);
    } else if (word.charAt(0) === matrix[row][col]) {
      // console.log(`diagonal check, [row][col] ${row}${col}, matrix: ${matrix[row][col]}, word: ${word}`);
      arr.push(word);
      arr.concat(diagonalCheck(row + 1, col + 1, matrix, word.substr(1), arr));
    } else {
      return arr;
    }
  }
  return arr;
}

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const rHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  letters.map(ls => ls.reverse());
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
  const rVerticalJoin = transposed.map(ls => ls.reverse().join(''));
  if (checkMatrix(horizontalJoin, word)) return true;
  if (checkMatrix(verticalJoin, word)) return true;
  if (checkMatrix(rHorizontalJoin, word)) return true;
  if (checkMatrix(rVerticalJoin, word)) return true;
  // const diagonalArrs = traverse(0, 0, letters, word);
  // console.log(diagonalArrs);
  // if (checkMatrix(diagonalArrs, word)) return true;
return false;
};

module.exports = wordSearch