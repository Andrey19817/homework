

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


// ====================DZ-8=====================================

// 1. Напишите функцию, которая вычисляет длину линий в
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



// ============================================================

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.


// function running(){
//     console.log(`MODEL + ${this.model} + COLOR ${this.color} + is running ${this.price}`);
// }
// function Car(model,color,price){
//     this.model = model;
//     this.color = color;
//     this.price = price;
//     this.run = running;
//     this.run();
//     return console.log(this);
// };
// let bmw = new Car('bmw','black','200000');
// let mercedes = new Car('mercedes','red','150000');

//почему функция вызывается сразу???

// ========================================================================

// 3. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц

// let arrBook = [];

// function getBiggerBook(arrBook) {
//     let maxPage = 0;
//     let name = 0;
//     for (let i = 0; i < arrBook.length; i++) {
//         if (maxPage < arrBook[i].pageAmount) {
//             maxPage = arrBook[i].pageAmount;
//             name = arrBook[i].author;
//         }
//     }
//     console.log(name);
// }

// function Book(author, bookName, pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//     arrBook.push(this)
// };
// let book1 = new Book('author1', 'bookName1', 100);
// let book2 = new Book('author2', 'bookName2', 200);
// let book3 = new Book('author3', 'bookName3', 300);
// let book4 = new Book('author4', 'bookName4', 400);
// let book5 = new Book('author5', 'bookName5', 500);
// let book6 = new Book('author6', 'bookName6', 600);
// let book7 = new Book('author7', 'bookName7', 700);
// let book8 = new Book('author8', 'bookName8', 800);

// getBiggerBook(arrBook);



// 4. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()



// class Timer {
//     seconds = 1;
//     intervalId = null;
//     start() {
//         this.intervalId = setInterval(() => console.log(this.seconds++), 1000);
//     }

//     stop(timerId) {
//         clearInterval(timerId)
//     }

//     reset() {
//         this.seconds = 1;
//         this.intervalId = null;
//     }
// }

// let timer1 = new Timer();
// timer1.start();
// setTimeout(timer1.stop, 5000, timer1.intervalId);


// ===========================DZ-9==================================
// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема.

// Создать класс ShopItem, инстанс которого должен обладать полями
// itemName - название товара
// price - цена товара (не может быть меньше нуля, используйте сеттер)
// amount - количество товара (не может быть меньше нуля, используйте сеттер)
// isOnSale - булево значение

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменять

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособность

// --------------------------------------------------------------------
// class Shop {
//     constructor() {
//         this.shopItems = [];
//         this.totalProfit = 0;
//     }
//     setSales(discauntPercent) {
//         this.isOnSale = true;
//         this.shopItems.forEach(elem => elem._price -= discauntPercent)
//     }
//     purchaseItem(itemName) {
//         let a = 0;
//         this.shopItems.find(function (elem) {
//             if (elem.itemName === itemName && elem._amount > 0) {
//                 elem._amount--;
//                 a += elem.price
//             } else if (elem._amount <= 0) {
//                 elem._amount = 0;
//                 throw new Error('finished product')
//             }
//         }
//         );
//         this.totalProfit += a;
//     }
//     pushShopItems(shopItem) {
//         this.shopItems.push(shopItem)
//     }
// }
// class ShopItem {
//     constructor(itemName, price) {
//         this.itemName = itemName;
//         if(price <= 0){
//             throw new Error('the price cannot be less than zero')
//         }else{
//             this._price = price;
//         }
//         this._amount = 0;
//         this.isonSale = true;
//     }
//     set price(price) {
//         if (price > 0) {
//             this._price = price;
//         } else {
//             throw new Error('the price cannot be less than zero')
//         }
//     }
//     get price() {
//         console.log(this._price);
//     }
//     set amount(amount) {
//         if (amount === 0) {
//             this.isOnSale = false;
//             console.log('no product');
//         } else {
//             this._amount = amount;
//         }
//     }
//     get amount() {
//         console.log(this._amount);
//     }

// }
// class Clothes extends ShopItem {
//     constructor(itemName, price, material, color) {
//         super(itemName, price);
//         this._size = '';
//         this.material = material;
//         this.color = color;
//     }
//     set size(size) {
//         if (size === 'S' || size === 'M' || size === 'L' || size === 'XL') {
//             this._size = size;
//         } else {
//             console.log('error size');
//         }
//     }
//     get size() {
//         console.log(this._size);
//     }
//     static changeColor(cloth, color) {
//         cloth.color = color
//     }
// }
// class TV extends ShopItem {
//     constructor(itemName, price, diogonal, withSmartTV) {
//         super(itemName, price);
//         this._diogonal = diogonal;
//         this._withSmartTV = withSmartTV
//     }
//     set diogonal(diogonal) {
//         throw new Error(`Error: diogonal ${this._diogonal}`)
//     }
//     get diogonal() {
//         return `${this._diogonal}`
//     }
//     set withSmartTV(withSmartTV) {
//         throw new Error(`withSmartTV ${this._withSmartTV}`)
//     }
//     get withSmartTV(){
//         return `${this._withSmartTV}`
//     }
// }

// let shop1 = new Shop()
// // console.log(Clothes);
// let clothes1 = new Clothes('pants', 100, 'cloth', 'red')
// clothes1.size = 'S';
// clothes1.amount = 10;
// let clothes2 = new Clothes('jacket', 50, 'leather', 'blue')
// clothes2.amount = 3;
// clothes2.size = 'XL'
// // console.log(clothes1);
// shop1.pushShopItems(clothes1)
// shop1.pushShopItems(clothes2)
// shop1.setSales(10)
// // shop1.purchaseItem('jacket')
// // shop1.purchaseItem('pants')
// // shop1.purchaseItem('jacket')
// // shop1.purchaseItem('jacket')
// // shop1.purchaseItem('jacket')
// // console.log(clothes2);
// // console.log(clothes1);
// // console.log(shop1);
// // console.log(shop1.purchaseItem('jacket'));
// // Clothes.changeColor(clothes1, 'black');
// // console.log(clothes1);
// let tv1 = new TV('Samsung', 1000, 101, true);
// tv1.amount = 10;
// // tv1.price = 0
// // tv1.diogonal = 80;
// // tv1.withSmartTV = false