new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result); //Вывело 1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result); //Затем 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); //Затем 4
    return result * 2;
  
  });