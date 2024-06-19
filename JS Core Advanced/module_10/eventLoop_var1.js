function delayCallback(callback, delay = 2000) {
    setTimeout(() => {
      callback(); // Вызывает callback функцию после задержки
    }, delay);
  }

  function message() {
    console.log("Сообщение с задержкой!");
  }
  
  delayCallback(message); // Выводит Сообщение с задержкой!
  