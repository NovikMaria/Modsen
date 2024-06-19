let timerId = setInterval(() => console.log('tick'), 2000); // вывело 2 раза tick

setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000); // далее вывело stop, тк время для повторения интервалов закончилось