import  express  from "express";
const app = express(); 

// Configurar a view engine com EJS
app.set('view engine', 'ejs');



// Configurando rotas
app.get('/', (req, res) => 
{
    const bandas = ['Lucas', 'Lucineide', 'Léo'];
    res.render('paginas/index', {bandas});
});

app.get('/sobre', (req, res) => 
{
    res.render('paginas/sobre');
});


app.get('/contato', (req, res) => 
{
    res.render('paginas/contato');
});





//  Executando o servidor
app.listen(8080, () => 
{
    console.log('servidor express rolando...')
});

// Instalando o nodemon -> atualiza o servidor automaticamente
// npm install -g nodemon

// Preparar para receber arquivos HTML
// Instalação do EJS - npm install ejs

