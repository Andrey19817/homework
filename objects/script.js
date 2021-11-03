

// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.

// let empty={};
// empty.name='andrey'
// function isEmptyObj(obj){
//     for(let key in obj){
//         return false;
//     }return true;
// }
// console.log(isEmptyObj(empty));


// -----------------------------------------------------------------


// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)

// let shtuchki={
//     shtuchka1:200,
//     shtuchka2:521,
//     shtuchka3:113,
//     shtuchka4:314,
//     shtuchka5:871,
// };

// function result(obj){
//     let sum=0;
//     for(let key in obj){
//         if(obj[key] > sum){
//             sum=obj[key];
//         }
//     } return sum;
// }

// console.log(result(shtuchki));


// ---------------------------------------------------------------------

// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).


// let student={
//     math:5,
//     biology:3,
//     language:2,
//     isOboltus:'yes',
// }
// function result(obj){
//     for(let key in obj){
//         if(isNaN(obj[key])){
//             break;
//         }else{
//             obj[key]*=2
//         }
//     } return student;
// }
// console.log(result(student));
// console.log(student);



// // -----------------------------------особое--------------------------------

// const arr = [
//   {a: 2, b: 1},
//   {a: 5, b: 12},
//   {a: 95, b: 7}
// ]
// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

// function result(obj){
//     let sum = obj.find(elem => elem.a < elem.b)
//     if(sum === undefined){
//       console.log('its valid');
//     }else{
//       console.log('its invalid');
//     }
//     }
// result(arr);

// ----------------------------------------------------------------------------

// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:

// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]
// function result(obj){
//   obj.forEach(item=>item.b = item.b**2);
//   return obj;
// }
// console.log(result(arr2));



// let sum=[];
// function result(obj){
//   obj.forEach(function(elem){
//     if(true){
//       sum.push(elem);  
//     }
//   })
//    sum.forEach(function(elem2){
//      if('b' in elem2){
//        elem2.b=elem2.b**2;
//      }
//    });
//    return sum;
//   };
// console.log(result(arr2));
// console.log(arr2);


// ----------------------------------------------------------------------------

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию.

// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]
// let arr=[];

// arr2.forEach(function(elem){
// if('a' in elem){
//   arr.push(elem.a);
// }if('b' in elem){
//   arr.push(elem.b);
// }

// })
// console.log(arr);