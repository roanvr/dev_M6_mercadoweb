const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const { extname } = require('path');

app.set("view engine", "hbs");
app.engine("hbs", exphbs.engine({
    layoutDir:__dirname+'/views',
    partialsDir:__dirname+'/views/partials',
    extname: 'hbs',
})
);

app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.get('/', (req,res) => {
    res.render('main',{
        title: 'Productos',
        products: ['banana', 'cebollas','lechuga','papas','pimenton','tomate']
    });
});

app.listen(PORT, () => {
    console.log(`Congrats! server initialized on http://localhost:${PORT}`)
})