import express = require('express');
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send(`
    <div style="text-align: center">
    <h1>Bigin Aimart</h1>
    <a href="https://aimartrealtors.com/">
    <img src="https://aimartrealtors.com/wp-content/uploads/2020/01/aimartrealtorslogo1.png" alt="logo">
</a>
</div>
`
);
});

app.get('*', (req, res) => {
    res.status(400).send("<h1 style='font-size: 40px font-weight: bolder; text-align: center; color: red;'> Oopps..!! Request Unauthorized!!  [Error 400 or 404].</h1>")
});

app.post('*', (req, res) => {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].")
});

app.put('*', (req, res) => {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].")
});

app.delete('*', (req, res) => {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].")
});

app.patch('*', (req, res) => {
    res.status(400).send("Oopps..!! Request Unauthorized!!  [Error 400 or 404].")
});



//== Testing ==//
const aimartApp = () => {
    if(10 > 100){
        console.error('Oopps..!! Human Error!!');
    }else if (100 < 10 && 0 > 100){
      console.error('Oopps..!! System Failure!!');
    }else{
        console.error('// Silence is golden.');  
    }
}
aimartApp();


//== Server ==//
const PORT: any = process.env.PORT || 3400;
app.listen(PORT, () =>{ console.log(`Server is listening on port ${PORT}`)});
    