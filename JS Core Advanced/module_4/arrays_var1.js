let num = [10, 20, 30, 40];

function increaseN(numbers) {
    // Создаем новый пустой массив, чтобы хранить увеличенные числа
    let increasedNumbers = [];
  
    // Проходим по каждому числу в исходном массиве
    for (let i = 0; i < numbers.length; i++) {
      // Умножаем текущее число на 1.1 (увеличиваем на 10%)
      let increasedNum = numbers[i] * 1.1;
  
      // Добавляем увеличенное число в новый массив
      increasedNumbers.push(increasedNum);
    }
  
    // Возвращаем массив с увеличенными числами
    return increasedNumbers;
  }
  
let increasedNumbers = increaseN(num);

console.log(increasedNumbers); // Вывело [11, 22, 33, 44]
  