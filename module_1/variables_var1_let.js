function foo() {
    {
      let x = 2;
      console.log(x); // Выводит 2
    }
    console.log(x + "2"); // Ошибка: x не определена
  }
  
  foo();