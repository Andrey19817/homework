// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let j=0;

// for(let i=0;;i++){
//     let n=+prompt('число','');
//     j=j+n;
//     if(n === +null){
//        alert(j / i);
//         break;
//     }
// }




// 2. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let n=+prompt('число','');
// let m=+prompt('число','');

// for(let i=n;i>=n && i<=m;i++){
//     if(i<=m){
//         let c=i*i;
//         console.log(c);
//     }
// }

// 3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.


// let n1=0;
// for(let i=0;i<=4;i++){
//     let n=+prompt('число','');
    
//     if(n<=n1){
//         alert('ошибка');
//         break;
//     }else{
//         n1=n++;
//     }
// }


// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let za=+prompt('сколько раз ввести "за"');
// let n='за';
// let c='';
// for(i=0;i<za;i++){
//     if(i<za){
//         c=c+n;
//     }
// }alert(c +'йка');

