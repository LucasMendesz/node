import  express from "express";
const app = express();

// Configurando o motor de visualização cin EJS
app.set('view engine', 'ejs');

// Configurando as rotas
// Cannot GET / -> Signica que não tem uma rota preparada.
app.get('/', (req, res) => 
{
    //res.send('Transformar em nodemon!');
    let bandas = ['Lucas', 'José', 'Frederico'];
    res.render('index', {bandas});
});

app.get('/sobre', (req, res) => 
{
    //res.send('Transformar em nodemon!');
    res.render('sobre');
});

app.get('/contato', (req, res) => 
{
    //res.send('Transformar em nodemon!');
    res.render('contato');
});

// Configurando o servidor
app.listen(8080, () => 
{
   console.log('Servidor rolando...');
});