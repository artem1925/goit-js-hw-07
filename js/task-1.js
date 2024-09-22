// Отримуємо список категорій
const categoriesList = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Проходимося по кожній категорії
categoriesList.forEach(category => {
  // Отримуємо заголовок категорії
  const categoryTitle = category.querySelector('h2').textContent;
  
  // Отримуємо кількість елементів у категорії
  const categoryItems = category.querySelectorAll('ul li').length;
  
  // Виводимо заголовок і кількість елементів у категорії
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});
