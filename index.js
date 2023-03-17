const express = require('express');
const  methodOverride = require('method-override')
const app = express();


var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

const DashboardRouter = require("./routers/DashboardRouter");


app.use(DashboardRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});


