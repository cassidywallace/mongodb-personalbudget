//budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000
const mongoose = require("mongoose");
const budgetModel = require("./models/budget_schema");
const bodyParser = require('body-parser');

app.use(cors());

let url = 'mongodb://localhost:27017/budgetdb';
console.log('the type of budget is', typeof url)

console.log(url);

//get-budget
//post-budget 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/budget', (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
    console.log("Connected to the database")
    budgetModel.find({})
            .then((data)=> {
                console.log(data)
                res.json(data);
                mongoose.connection.close()
            })
            .catch((connectionError)=> {
                console.log(connectionError)
                res.send("Connection error");
            })
            .catch((connectionError) => {
                console.log(connectionError)
            })
        })
    
})

app.post('/budget', (req,res)=>{
    res.send("Insert")
        const budget = new Budget({
            title: req.body.title,
            budget: req.body.budget,
            color: req.body.color,
        });
        budget.save().then((data)=> {
            if (!data){
                return res.status(400).json({
                    errors: err,
                });
            }
            return res.json(data);
        });
    });

app.use("/", express.static('public'));

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});




