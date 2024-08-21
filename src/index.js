module.exports = function towelSort (matrix) {
  let result = []
  if (matrix === undefined) return result
  for (let i=0; i<matrix.length; i++) {
    console.log(matrix[i])
    if (i%2!==0) {
      matrix[i].reverse();
      matrix[i].forEach(el => {
        result.push(el)
      });
      
    } else {
      matrix[i].forEach(el => {
        result.push(el)
      });
    }
  }
  return result;
}