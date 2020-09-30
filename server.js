const express = require('express');
const app = express();
const port = 3000

app.use('/', express.static ('public'));

const budget = require('./myBudget.json');
console.log('the type of budget is', typeof budget)

console.log(budget);

    /*myBudget:[
    {
        title: 'Eat out',
        budget: 30
    },
    {
        title: 'Grocery',
        budget: 90
    },
    {
        title: 'Rent',
        budget: 375
    }
]
};*/
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.get('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});




