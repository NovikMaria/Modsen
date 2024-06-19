class NotIntError extends Error {
    constructor(message) {
      super(message);
      this.name = "NotIntError";
    }
  }
  
  function checkInt(number) {
    if (Math.floor(number) !== number) {
      throw new NotIntError("Данное число не является целым числом");
    } return `${number} является целым числом`;
  }
  
  try {
    checkInt(3.14);
  } catch (error) {
    console.error(error.name + ": " + error.message); // Выводит: NotIntError: Данное число не является целым числом
  }