// eslint-disable-next-line
const express = require('express');
// eslint-disable-next-line
const favicon = require('express-favicon');
// eslint-disable-next-line
const path = require('path');

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
// eslint-disable-next-line
app.use(favicon(__dirname + '/build/favicon.png'));

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

//здесь наше приложение отдаёт статику
// eslint-disable-next-line
app.use(express.static(__dirname));
// eslint-disable-next-line
app.use(express.static(path.join(__dirname, 'build')));

//обслуживание html
app.get('/*', function (req, res) {
	// eslint-disable-next-line
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
