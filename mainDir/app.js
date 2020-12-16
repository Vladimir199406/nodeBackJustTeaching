//остановился на метанит.кум//работа с модулями
const http = require("http");
//model for creating server
const os = require("os");
//info about os
const greeting = require("./greeting");
//import module with date and greeting
const User = require("./user");
//import module with user constructor
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
    );


    //server answer goes to url answer
}).listen(3000, "127.0.0.1", function(){
    console.log("Сервер начал прослушивание запросов, порт 3000"
                + greeting.date
                +`Hello ${greeting1.name}`
    );
    //params to listen
    //console log goes down
});

let greeting2 = require("./greetingName");
greeting2.name = "Bob";
console.log(`Hello ${greeting2.name}`);
console.log(`Hello ${greeting1.name}`);