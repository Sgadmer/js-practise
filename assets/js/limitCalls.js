/**
 * Напишите функцию limitCalls(fn, maxCalls), принимающую функцию fn,
 * и возвращающую новую функцию, которую можно вызвать не более
 * указанного в maxCalls количества раз.
 *
 * В целях упрощени, входящая функция не принимает никаких аргументов, работу с
 * аргументами можно не учитывать.
 *
 * Пример:
 * const limitedLog = limitCalls(() => console.log('log'), 2);
 * limitedLog(); // 'log'
 * limitedLog(); // 'log'
 * limitedLog(); // undefined
 * limitedLog(); // undefined
 *
 *
 * @param  {Function} fn функция
 * @param  {number} maxCalls максимальное количество вызовов
 * @return {Function}
 */
function limitCalls(fn, maxCalls) {

      function Func ()
      {
          if (maxCalls) {maxCalls--; return fn();}
      }

    return Func;
}


console.log('Задание №4');
const limitedLog = limitCalls(() => 2, 2);
console.log( limitedLog());
console.log( limitedLog());
console.log( limitedLog());
console.log( limitedLog());