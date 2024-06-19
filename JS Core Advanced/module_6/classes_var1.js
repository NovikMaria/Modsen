class Human {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    showData() {
      return `Имя ${this.name}, возраст ${this.age}, страна ${this.country}`;
    }
  }
  
  const human1 = new Human("Иван", 46, "Россия");
  const human2 = new Human("Никита", 21, "Беларусь");

  console.log(human1.showData());
  console.log(human2.showData());

  /*Вывело: Имя Иван, возраст 46, страна Россия
            Имя Никита, возраст 21, страна Беларусь*/
  