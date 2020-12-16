//остановился на метанит.кум//работа с модулями
const http = require("http");
//model for creating server
const os = require("os");
//info about os
const greeting = require("./greeting");
//import module with date and greeting
const User = require("./user");
//import module with user constructor
const welcome = require("./welcome");
//import module block "welcome"

let greeting1 = require("./greetingName");



http.createServer(function (request, response){
    let  userName = os.userInfo().username;
    let vladimir = new User("Vladimir", 26);
    //creating new object
    response.end("Hello NodeJS!" + "  "
        + userName
        +"\r\n"
        + greeting.getMessage(userName)
        +"\r\n"
        +vladimir.sayHi()
        +"\r\n"
    );


    //server answer goes to url answer
}).listen(3000, "127.0.0.1", function(){
    console.log("Сервер начал прослушивание запросов, порт 3000"
                +` Hello ${greeting1.name}`
    );
    //params to listen
    //console log goes down
});

let greeting2 = require("./greetingName");
greeting2.name = "Bob";
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);

welcome.getMorningMessage();
welcome.getEveningMessage();
//Можно обращаться к узлам по имени директории, если осущетслен ее импорт
//в данном случае в дир welcome main файл является index.js, в нем и "стягивается" функционал


global.name = "Vladimir";

global.console.log(date);
console.log(greeting.getMessage());
//Здесь устанавливаем глобальную переменную name,
// которую мы получаем в модуле greeting.js.
// И также выводим на консоль глобальную
// переменную date. Причем все глобальные
// функции и объекты, например, console,
// также доступны внутри global, поэтому
// мы можем написать и global.console.log(),
// и просто console.log().