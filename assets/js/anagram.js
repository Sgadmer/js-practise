/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('Statue of Liberty', 'Built to stay free') === true
 * anagram('просветитель', 'терпеливость') === true
 * anagram('апельсин', 'Апельсин') === false
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
function anagram(first, second) {

    let first2, second2;


    first2 = first.toLowerCase();
    second2 = second.toLowerCase();

    first2 = first2.replace(/\s/g, '');
    second2 = second2.replace(/\s/g, '');

    if (first2 === second2) {return false;}
   
    else {
    first2 = (first2.split('').sort().join(''));
    second2 = (second2.split('').sort().join(''));
    return (first2 === second2);
    }
}

console.log(anagram('Statue of Liberty', 'Built to stay free'));
console.log(anagram('просветитель', 'терпеливость'));
console.log(anagram('апельсин', 'Апельсин'));