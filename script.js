// const ACCESS_KEY = "dOZhSJ0HqEwGuGZAQSuFpuE8lo9aHb1Sh-N6SOiQUdc"; // Ipi key

// const API_URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

 const ACCESS_KEY = "dOZhSJ0HqEwGuGZAQSuFpuE8lo9aHb1Sh-N6SOiQUdc"; // Ваш API ключ
 const API_URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;
const dataList = document.getElementById("data-list");



// функция для добовления изображения на страницу
function addPictures(container) {
  fetch(API_URL) // запростли данные у сервера
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка при полечения данных ${response.status}`);
      }
      return response.json(); // преобразуем запрос в jason формат
    })
    .then((data) => {
      data.forEach((pic) => {
        // перебираем полученные данные
        const imageContainer = document.createElement("div"); // создаем контайнер для изображения и имени
        const imgEl = document.createElement("img"); // создаем элементы img
        imgEl.src = pic.urls.regular; // устанавливаем источник изображения
        imgEl.alt = pic.alt_description; //устанавливаем альтарнативный текст
        imgEl.classList.add("image"); // добовляем класс для стилизации

        const photographerEl = document.createElement("p"); //создаем контайнер для имени фотографа
        photographerEl.classList.add("photographer"); // создали класс для нашего фотографа
        photographerEl.textContent = `Фотограф: ${pic.user.name}`;

        const likeButton = document.createElement("button"); // создаем кнопку для лайков
        likeButton.classList.add("like-button"); // создали класс для кнопки
        likeButton.textContent = "Лайк"; // вписали текст в кнопку
        likeButton.addEventListener("click", () => {
          likeButton.classList.toggle("liked"); // переключаем класс при нажатии
          imgEl.classList.toggle("liked"); // подсвечиваем и убираем подцветку изображения при нажатии
        });

        // добовляем элементы в контайнер
        imageContainer.appendChild(imgEl);
        imageContainer.appendChild(photographerEl);
        imageContainer.appendChild(likeButton);

        // добовляем контайнер с изображением в список
        container.appendChild(imageContainer);
      });
    })
    .catch((error) => console.log(error));
}

// вызов функции добовления изображения при загрузке страницы
addPictures(dataList);
