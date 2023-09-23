const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App' });
});

app.get('/smp', (req, res) => {
    res.render('switch', { title: 'My Express App' });
});


// folder handler

app.use('/static', express.static('./static'))


//404 handler

app.get('*', (req, res) => {
  res.render('404', { title: 'Are you lost?' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
