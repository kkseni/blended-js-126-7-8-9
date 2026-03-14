// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
//===============================
const styles = ["jazz", "blues"];
styles.push("rock-n-roll");

const index = styles.indexOf("blues");
styles[index] = "classic";


function logItems(array) {
    for (let i = 0; i < array.length; i += 1){
        console.log(`${i+1}- ${array[i]}`)
    }
}
logItems(styles);


