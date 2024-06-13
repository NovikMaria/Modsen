function foo() {
    {
      var x = 1;
      console.log(x); // Выводит 1
    }
    console.log(x + "1"); // Выводит 11
  }
  
  foo();