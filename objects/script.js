

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

// =====================DZ-7=============================


// 1. Дан объект:
// var person = {
// name:’Pablo Picasso’
// }
// Создайте функцию addName(obj, name), которая
// добавляет в список имя name, но только если его там еще
// нет:
// addName(person, 'Garcia');
// // person.name=>'Pablo Picasso Garcia'
// addName(person, 'Pablo');
// // без изменений (имя уже существует)
// addName(person, 'Rodrigez');
// // person.name=>'Pablo Picasso Garcia Rodrigez'



// let person = {
//     name:'Pablo Picasso',
//     }
    
// function addName(obj, name){
//     for(let key in obj){
//         let arr=obj[key].split(' ');
//         if(arr.indexOf(name)===-1){
//             obj[key]=obj[key]+' '+name;
//         }
//         return console.log(obj);
//     }
//         };
    
// addName(person,'Garcia');
// addName(person,'rodriges');
// addName(person,'panco');
// addName(person,'Garcia');
// addName(person,'jhkjph');
// addName(person,'Garcia');
// addName(person,'rodriges');


// ===================================================


// 2. Дан объект:
// let person = {
//     name: 'Pablo Picasso Garcia Rodrigez'
//     }
// Создайте функцию removeName(obj, name), которая
// удаляет из имени слово name, но только если оно там есть:
// removeName(person, 'Garcia');
// // person.name=>'Pablo Picasso Rodrigez '
// removeName(person, 'Akakij');
// // без изменений (такого имени нет)
// removeName(person, 'Rodrigez');
// // obj.name=>'Pablo Picasso'

// let person = {
//     name: 'Pablo Picasso Garcia Rodrigez'
//     };

//     function  removeName(obj, name){
//         for(let key in obj){
//             let arr=obj[key].split(' ');
//             if(arr.indexOf(name)===-1){
//                 break;
//             }else{
//             arr.splice(arr.indexOf(name),1);
//             obj[key]=arr.join(' ')
//             }
            
//         } return console.log(obj);
//     }
//     removeName(person,'Akakij');
//     removeName(person,'Rodrigez');
//     removeName(person,'Garcia');
//     removeName(person,'Pablo');
// =================================================================

// 3. Существует массив(длина: 4) футболистов (каждый
// футболист – это объект). Напишите функцию
// addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
// running”)

// let futbollist=[
//     {
//         name:'Pablo'
//     },
//     {
//       name:'Garcia'  
//     },
//     {
//         name:'Rodrigez'
//     },
//     {
//         name:'Akakij'
//     }
// ];


// function running(){
//     console.log(`${this.name} is running`);
// }
// function addAbility(arr){
//     arr.forEach((elem) => {elem.run = running})
//     arr.forEach((elem) => {
//         elem.run();
//     });
// }
// addAbility(futbollist);


// ====================================================================



// 4. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.

// let line1=[{},{}];
// let line2=[{},{}];
// let line3=[{},{}];

// function lengthLine(line,startX1,startY1,endX1,endY1){
//     line[0].startX1=startX1;
//     line[0].startY1=startY1;
//     line[1].endX1=endX1;
//     line[1].endY1=endY1;
//     return console.log((endX1-startX1)**2 + (endY1-startY1)**2);
// };


// function triangleWill(){
//     let sumLine1=line1[0].startX1 + line1[0].startY1;
//     let sumLine2=line2[1].endX1 + line2[1].endY1;
//     let sumLine3=line3[0].startX1 + line1[0].startY1;
//     if(sumLine1===sumLine2 && sumLine2===sumLine3 && sumLine3===sumLine1){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
    
// }
// lengthLine(line1,2,2,4,4);
// lengthLine(line2,4,4,2,2);
// lengthLine(line3,2,2,4,4);
// triangleWill();
// console.log(line1);
// console.log(line2);
// console.log(line3);
