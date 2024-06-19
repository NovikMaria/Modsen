async function fetchData(url) {
    try {
      const response = await fetch(url); // Ожидаем ответа от сервера
      const users = await response.json(); // Преобразуем ответ в JSON
      return users; 
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      throw error;
    }
  }
  
  const apiUrl = "https://api.github.com/users";
  
  fetchData(apiUrl)
    .then(users => {
      console.log("Полученные данные:", users);
    })
    .catch(error => {
      console.error("Произошла ошибка:", error);
    });
    // Вывело: Ошибка при загрузке данных: ReferenceError: fetch is not defined
  