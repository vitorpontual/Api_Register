const mongoose = require('mongoose')
require('dotenv/config')

const key = process.env.DB_KEY
const dbname = process.env.DB_NAME
const user = process.env.DB_USER

mongoose.connect(`mongodb+srv://${user}:${key}@cluster0.pfeza.mongodb.net/${dbname}`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('DB Connected'))
mongoose.Promise = global.Promise;

module.exports = mongoose

