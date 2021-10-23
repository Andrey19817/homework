

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