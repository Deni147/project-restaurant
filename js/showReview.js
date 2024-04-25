// const reviews = document.getElementsByClassName('reviews')
const  review= document.getElementsByClassName('review')
let index = 0;

function showReview() {
  // Проверяем, чтобы у нас было хотя бы два элемента
  if (review.length < 2) return;

  // Удаляем класс у текущего элемента
  review[index].classList.remove('reviewsRemove');

  // Получаем индекс предыдущего элемента
  var prevIndex = index - 1;
  // Если текущий элемент первый, берем последний элемент в качестве предыдущего
  if (prevIndex < 0) prevIndex = review.length - 1;

  // Добавляем класс предыдущему элементу
  review[prevIndex].classList.add('reviewsRemove');

  // Увеличиваем индекс
  index++;

  // Если индекс равен длине массива, сбрасываем его в 0
  if (index === review.length) index = 0;
}

showReview();
setInterval(showReview, 2000);