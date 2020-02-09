/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
function capitalize(input) {
    let res = '';


    for (let char in input) {
        
        if (input[+char -1] == ' ')
        {
            res += input[char].toUpperCase();
        } 
        else 
        {
            res += input[char]
        }
    }

    res = res[0].toUpperCase() + res.slice(1);

    return res;
}

console.log('Задание №2');
console.log(capitalize('а роза упала на лапу Азора'));
console.log(capitalize('Use the force, Luke'));