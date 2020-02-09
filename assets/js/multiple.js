/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */
function multiple(a, b) {

    let c=0;

    for (let i=0; i<b; i++)
    {
        c+=a;
    }

    return c;
}

console.log('Задание №5');
console.log(multiple(1, 1));
console.log(multiple(1, 2));
console.log(multiple(0, 0));
console.log(multiple(4, 3));