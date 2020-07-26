import express = require('express');
const app: express.Application = express();

app.get('/', function (req, res) {
res.send('Hello World!');
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
    