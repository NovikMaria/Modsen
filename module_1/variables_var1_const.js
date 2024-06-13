function foo() {
    {
      const x = 3;
      console.log(x); // Выводит 3
    }
    console.log(x + "3"); // Ошибка: x не определена
  }
  
  foo();

  //let и  const не видны снаружи блока, var выводится внутри и снаружи блока