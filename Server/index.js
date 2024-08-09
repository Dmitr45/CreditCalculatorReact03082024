import express from "express"; 

const app = express();

app.get('/', (req, res)=>{ //Если идет запрс get на главный путь, то мы выполняем функцию
// request - пришедший запрос respons - наш ответ
res.send("Привет, я работаю");
});


app.listen(4444,(err)=>{  // Запускаем сервер на порте 4444
if (err){return console.log(err)} // Если не запустился, выводится ошибка
console.log("Server OK") // если всё Ок, то ОК:)
} );