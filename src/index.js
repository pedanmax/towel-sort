
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
    
    if(matrix == undefined){
        return res;
    } else {
        for (let i = 0; i < matrix.length; i++){
            if (i % 2 !== 0 ){
                matrix[i] = matrix[i].reverse();
                matrix[i].forEach(e => {
                    res.push(e)
                });
            } else {
                matrix[i].forEach(e => {
                    res.push(e)
                });
            }
        }
        return res;
    }
}
