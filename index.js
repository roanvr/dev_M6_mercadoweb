const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const path = require('path');

app.set("view engine", "hbs");
app.set('views', path.join(__dirname,'views'));
app.engine("hbs", exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname+'/views/layouts',
    partialsDir: __dirname+'/views/partials',
    extname: 'hbs'
})
);

app.use(express.static('assets'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.get('/', (req,res) => {
    res.render('home',{
        title: 'Productos',
        products: ['Banana', 'Cebollas','Lechuga','Papas','Pimenton','Tomate']
    });
});

app.listen(PORT, () => {
    console.log(`Congrats! server initialized on http://localhost:${PORT}`)
})