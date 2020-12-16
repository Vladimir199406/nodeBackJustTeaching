let currentDate = new Date();
//Создаёт экземпляр объекта Date,
// представляющего собой момент времени.
// Обьект Дата содержит число милисекунд
// прошедших с 1 января 1970 г. UTC

global.date = currentDate;
//теперь можно использовать переменную дата вне модуля


module.exports.getMessage = function(name){
    //можно использовать вне модуля
    //Получает локализованную строку
    // для указанного сообщения.
    let hour = currentDate.getHours();
    //Метод getHours() возвращает часы
    // указанной даты по местному времени.
    if(hour > 16){
        return "Good evening, " + global.name;
    }
    else if(hour > 10){
        return "Good day, " + global.name;
    }
    else{
        return "Good morning, " + global.name;
    }
}