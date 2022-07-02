const express = require('express')
const app = express()

const internetbanking = require('./routes/internetbanking/internetbanking.js')
const loan = require('./routes/loan/loan.js') // this is changes doen by priyanka for issue8
const shopping = require('./routes/shopping/shopping.js')
const creditcard = require('./routes/creditcard/creditcard.js')


app.use(express.static("public"));

app.use('/internetbanking', internetbanking)
app.use('/loan', loan)
app.use('/shopping', shopping)
app.use('/creditcard', creditcard)


const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log("running on port 8080");
})


// Chaithanya made these changes for issue7
// Chaithanya made these changes for issue7
