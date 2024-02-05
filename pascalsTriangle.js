function pascalsTriangle(n) {
    const triangle = [];
  
    for (let i = 0; i < n; i++) {
      triangle[i] = [];
      triangle[i][0] = 1;
  
      for (let j = 1; j < i; j++) {
          
        triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        console.log(triangle[i][j])
      }
  
      triangle[i][i] = 1;
    }
  
    return triangle;
  }
  console.log(pascalsTriangle(5))