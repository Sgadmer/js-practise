/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * @param  {string} input
 * @return {string}
 */
function rle(input) {
    
    let counter = 1;
    let finalRle = "";

    for (let i=0; i< input.length; i++)
    {
        if (input[i]==input[i+1]) {counter++;}

        else if (counter != 1)
         {
            finalRle += input[i] + counter; 
            counter =1;
        }

        else 
        {
            finalRle += input[i];
        }
    }

    return finalRle;
}
console.log('Задание №6');
console.log(rle('AAAB'));
console.log(rle('BCCDDDEEEE'));