const 
    express = require('express'),
    app = express(),
    port = 80;

app.set('view engine', 'ejs');

app.use(express.static(__dirname+"\\public"));

app.use('/',(req, res, next)=>{
    console.log("app.use() session check");
    next()
})

app.get('/',(req, res) => {
    res.render('clickThroughPage', { root: __dirname });
});

app.get('/about', (req, res) => {
    console.log("about us");
    res.render('about', { root: __dirname });
});

app.get('/home', (req, res) => {
    console.log("home");    
    console.log(`root=${__dirname}`+"\\public");
    res.render('home', { root: __dirname });
});

app.get('/contact', (req, res) => {
    console.log("contact");
    res.render('contact', { root: __dirname });
});

app.get('/services', (req, res) => {
    console.log("services");    
    console.log(`root=${__dirname}`+"\\public");
    res.render('services', { root: __dirname });
});

app.get('/projects', (req, res) => {
    console.log("projects");
    res.render('projects', { root: __dirname });
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});

