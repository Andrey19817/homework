

// 1. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.


// function square(num){
//     return num**2;
// }
// function getSquare(arr,func){
//     let result=[];
//     for(elem of arr){
//         result.push(func(elem));
//     }return result;
// }
// console.log(getSquare([1,2,3,4,5],square));
	



// 2. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function callback(num){
//     return num;
// }

// function sumTo(num1,num2,func){
//     let sum=num1 + num2;
//     console.log(func(sum));
// }
// sumTo(2,2,callback);




// 3. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.



// function callback1(){
//     alert('верно');
// }

// function callback2(){
//     alert('неверно');
// }
// function checkLogin(log1,log2,func1,func2){
//     if(log1===log2){
//         func1();
//     }else{
//         func2();
//     }
// }
// checkLogin(prompt('login'),'password',callback1,callback2);




// //В заданиях ниже, старайтесь разбивать код на функции
 

// 4. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).



// function callback1(){
//     alert('что то пошло не так');
// }
// function callback2(num){
//     console.log(num);
// }

// function callback3(num){
//     if(num === '' || num === null || num < 1 || isNaN(num)){
//         callback1();
//     }
// }
// function getExamination(num,func1){
//     let result=[];
//     callback3(num);
//     for(let i=1;i <= num;i++){
//         result.push(i);
//     }
//     func1(result);
// }
// getExamination(prompt('число'),callback2);






// 5. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»



// function result(a,b,c){
//     console.log(`положительных ${a} отрицательных ${b} нулей ${c}`);
// }
// function numberDigits(num1,func){
//     let positive=0;
//     let negative=0;
//     let zeros=0;
//    for(let i = 0;i < num1; i++){
//        let userNum=+prompt('введите число');
//        if(userNum > 0){
//            positive++;
//        }else if(userNum < 0){
//            negative++;
//        }else{
//            zeros++;
//        }
//    }func(positive,negative,zeros);

// }
// numberDigits(+prompt('сколько чисел вводите?'),result);





// 6. Написать программу, которая просит ввести с
// клавиатуры 10 пар чисел, сравнивает эти числа и
// выводит большие из них. (Используйте массив)




// function getNum(){
//     let arr=[];
//     for(let i=0;i<3;i++){
//         let num1=+prompt('введите первое число');
//         let num2=+prompt('введите второе число');
//         if(num1 > num2){
//             arr.push(num1);
//         }else{
//             arr.push(num2);
//         }
//     }
//     console.log(arr);
// }
// getNum();





// 7. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// function getNum(){
//     let arr=[];
//     for(let i=10;i <= 100;i++){
//         if(i % 4 === 0 && i % 6 !== 0){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }
// getNum();




// 8. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// function result(a,b){
//     alert(a / b);
// }
// function getNum(){
//     let sum=0;
//     for(i=0;;i++){
//         let j=prompt('введите число');
//         sum+=+j;
//         if(j===null){
//             break;
//         }
//     }
//     result(sum,i);
// }
// getNum();
// ----------------------------------------------------------------------------------------

// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).


// function toggleMe(){
//     let val=true;
//     return function(){
//         val=!val;
//         return val;
//     } 
// }let marcker=toggleMe();
// console.log(marcker());
// console.log(marcker());
// console.log(marcker());
// console.log(marcker());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0


// let a=100
// function funcCounter1(a){
//     let sum=a;
//     return function(){
//         if(a<=100){
//             sum++;
//             return sum;
//         }else if(a>100 && sum>0){
//             sum--;
//             return sum;
//         }
//     }
//     }
//     let funcCounter=funcCounter1(a);
    
//     for(let i=0;;i++){
//         console.log(funcCounter());
//         if(i===120){
//             break;
//         }
//     }




// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// let className ='class';

// function classNameEditor(text1,text2){
    
//     className=text1 + className;
//     if(text2===true || text2===false){
//     let arr=className.split('');
//     for(let i=0;i<text1.length;i++){
//         arr.shift(arr[i]);
//     } 
//       className=arr.join('');
      
//     }return className; 
// }

// console.log(classNameEditor('lhghg'));
// console.log(classNameEditor('zJHJ',true));
// console.log(classNameEditor('zJHJ'));

// ----------------------------------------------------------------------------------------------------


// 1. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 1.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 1.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 1.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 1.5 Отсортируйте получившийся массив по алфавиту

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];


// 1.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// function additionName(){
//     let a=prompt('введите искомое имя');
//     if(people1.includes(a,0)){
//         people2.push(a);
//     }return people2;
// }
// console.log(additionName());



// 1.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// function deletionName(){
//     let a=prompt('введите искомое имя');
//     let findName=people2.indexOf(a,0);
//     if(findName >= 0){
//         people2.splice(findName,1);
//         return people2;
//     }else{
//         alert('такого имени нет');
//     }
// }
// console.log(deletionName());


// 1.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.

// function coincidenceName(){
//     let newPeople=[];
//     for(let i=0;i<people1.length;i++){
//         if(people2.indexOf(people1[i],0)>=0){
//             newPeople.push(people1[i])
//         }
//     }return newPeople
// }
//     console.log(coincidenceName());

// -----------------------------------------------------------------------------------------

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// let arr=[23,45,64,122,78,56,47,89,90];
// let result = arr.filter(item => item > 10 && item < 100 && item % 2=== 0);
// console.log(result);

// ----------------------------------------------------------------------------------------------

// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let arr=['Семен','Степан','Николай','Виктор'];
// let result=arr.some(elem => elem ==='Степан');
// console.log(result);

// ----------------------------------------------------------------------------------------------------

// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// let arr=[23,45,64,122,78,56,47,89,90];
// let result=arr.reduce(function(sum,curent){
//     if(curent % 2 ===0){
//         return sum + curent;
//     }else{
//         return sum;
//     }
// })
// console.log(result);

// ------------------------------------------------------------------------------------------------
// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arr=[];
// for(let i=0;i<10;i++){
//     let a=prompt('введите число');
//     arr.push(a);
// }
// let result=arr.every(elem=>Number(elem));
// console.log(result);